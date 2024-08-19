package es.conectacampo.springboot.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreatePublicationDTO {

    @NotNull(message = "UserId no puede ser NULL")
    private Long userId;

    @NotBlank(message = "description no puede estar vacío")
    @Size(max = 250)
    private String description;

    @NotBlank(message = "address no puede estar vacío")
    @Size(max = 250)
    private String address;

    @NotBlank(message = "schedule no puede estar vacío")
    @Size(max = 100)
    private String schedule;

    private MultipartFile image;
}
