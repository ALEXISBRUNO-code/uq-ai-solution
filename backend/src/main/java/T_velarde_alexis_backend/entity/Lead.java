package T_velarde_alexis_backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "leads")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Lead {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank private String nombre;
    @Email private String email;
    private String empresa;
    private String telefono;

    @Column(length = 1000)
    private String mensaje;

    @CreationTimestamp
    private LocalDateTime fechaRegistro;
}