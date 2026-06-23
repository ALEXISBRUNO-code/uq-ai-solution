package T_velarde_alexis_backend.dto;

import T_velarde_alexis_backend.entity.Usuario;
import lombok.Data;

@Data
public class UsuarioResponse {
    private Long id;
    private String nombre;
    private String apellidos;
    private String email;
    private String rol;
    private String area;

    public static UsuarioResponse from(Usuario u) {
        UsuarioResponse r = new UsuarioResponse();
        r.setId(u.getId());
        r.setNombre(u.getNombre());
        r.setApellidos(u.getApellidos());
        r.setEmail(u.getEmail());
        r.setRol(u.getRol().name());
        r.setArea(u.getArea());
        return r;
    }
}