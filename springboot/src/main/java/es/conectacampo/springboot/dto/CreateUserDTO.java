package es.conectacampo.springboot.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateUserDTO {

    @NotEmpty(message = "Roles no puede estar vacío")
    private Set<@NotBlank(message = "El rol no puede estar vacío") String> roles;

    @NotBlank(message = "City no puede estar vacío")
    @Size(max = 50)
    private String city;

    @NotBlank(message = "El nombre no puede estar vacío")
    @Size(max = 50)
    private String name;

    @NotBlank(message = "Los apellidos no pueden estar vacíos")
    @Size(max = 100)
    private String surname;

    @NotBlank(message = "El usuario no puede estar vacío")
    @Size(max = 100)
    private String username;

    @NotBlank(message = "La password no puede estar vacía")
    private String password;

    @Email(message = "El email debe ser válido")
    @NotBlank(message = "El email no puede estar vacío")
    @Size(max = 80)
    private String email;

    @Size(max = 9, message = "El teléfono debe tener hasta 9 caracteres")
    private String telephone;
}
