package T_velarde_alexis_backend.service;

import T_velarde_alexis_backend.dto.*;
import T_velarde_alexis_backend.entity.*;
import T_velarde_alexis_backend.repository.UsuarioRepository;
import T_velarde_alexis_backend.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authManager;

    public UsuarioResponse register(RegisterRequest req) {
        if (usuarioRepo.existsByEmail(req.getEmail()))
            throw new RuntimeException("Email ya registrado");
        Usuario u = Usuario.builder()
                .nombre(req.getNombre())
                .apellidos(req.getApellidos())
                .email(req.getEmail())
                // SEGURIDAD: hash bcrypt, nunca texto plano
                .password(passwordEncoder.encode(req.getPassword()))
                .rol(Rol.USER)
                .area(req.getArea())
                .build();
        return UsuarioResponse.from(usuarioRepo.save(u));
    }

    public AuthResponse login(LoginRequest req) {
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword()));
        String token = jwtService.generateToken(req.getEmail());
        Usuario u = usuarioRepo.findByEmail(req.getEmail()).orElseThrow();
        return new AuthResponse(token, u.getRol().name(), "OK");
    }
}