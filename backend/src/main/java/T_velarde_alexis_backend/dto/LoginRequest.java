package T_velarde_alexis_backend.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class LoginRequest {
    @Email private String email;
    @NotBlank private String password;
}