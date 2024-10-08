package es.conectacampo.springboot.dto;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserDTO {

    @Size(max = 9, message = "El teléfono no puede exceder los 9 caracteres")
    private String telephone;

    @Size(max = 50, message = "La ciudad no puede exceder los 50 caracteres")
    private String city;

    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    private String password;

    @Size(max = 250, message = "La descripción 'Sobre mí' no puede exceder los 250 caracteres")
    private String aboutMe;

    private String pathProfileImage;

    @Size(max = 50, message = "El nombre no puede exceder los 50 caracteres")
    private String name;

    @Size(max = 50, message = "El apellido no puede exceder los 50 caracteres")
    private String surname;

    @Size(max = 50, message = "El nombre de usuario no puede exceder los 50 caracteres")
    private String username;
}
