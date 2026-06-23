package T_velarde_alexis_backend.controller;

import T_velarde_alexis_backend.dto.UsuarioResponse;
import T_velarde_alexis_backend.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioRepository usuarioRepo;

    @GetMapping
    public ResponseEntity<List<UsuarioResponse>> getAll() {
        return ResponseEntity.ok(
            usuarioRepo.findAll().stream()
                .map(UsuarioResponse::from)
                .toList()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioResponse> getById(@PathVariable Long id) {
        return usuarioRepo.findById(id)
                .map(u -> ResponseEntity.ok(UsuarioResponse.from(u)))
                .orElse(ResponseEntity.notFound().build());
    }
}