package es.conectacampo.springboot.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateUserDTO {

    @NotBlank(message = "Roles no puede estar vacío")
    @NotNull(message = "Roles no puede ser NULL")
    private Set<String> roles;

    @NotBlank(message = "City no puede estar vació")
    @NotNull(message = "City no puede ser NULL")
    @Size(max = 50)
    private String city;

    @NotBlank(message = "El nombre no puede estar vacío")
    @NotNull(message = "El nombre no puede ser NULL")
    @Size(max = 50)
    private String name;

    @NotBlank(message = "Los apellidos no puede estar vacío")
    @NotNull(message = "Los apellidos no puede ser NULL")
    @Size(max = 100)
    private String surname;

    @NotBlank(message = "El usuario no puede estar vacío")
    @NotNull(message = "El usuario no puede ser NULL")
    @Size(max = 100)
    private String username;

    @NotBlank(message = "La password no puede estar vacío")
    @NotNull(message = "La password no puede ser NULL")
    private String password;

    @Email
    @NotBlank(message = "El email no puede estar vacío")
    @NotNull(message = "El email no puede ser NULL")
    @Size(max = 80)
    private String email;

    @Size(max = 9)
    private String telephone;





}
