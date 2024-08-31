package es.conectacampo.springboot.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdatePublicationDTO {

    @NotBlank(message = "La descripción no puede estar vacía")
    @Size(max = 250, message = "La descripción no puede exceder los 250 caracteres")
    private String description;

    @NotBlank(message = "La dirección no puede estar vacía")
    @Size(max = 250, message = "La dirección no puede exceder los 250 caracteres")
    private String address;

    @NotBlank(message = "El horario no puede estar vacío")
    @Size(max = 100, message = "El horario no puede exceder los 100 caracteres")
    private String schedule;

    private String pathPublicationImage;
}
