package T_velarde_alexis_backend.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotBlank private String nombre;
    @NotBlank private String apellidos;
    @Email private String email;
    @NotBlank private String password;
    @NotBlank private String area;
}