package es.conectacampo.springboot.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreatePublicationDTO {

    @NotBlank(message = "UserId no puede estar vacío")
    @NotNull(message = "UserId no puede ser NULL")
    private long userId;

    @NotBlank(message = "description no puede estar vacío")
    @NotNull(message = "description no puede ser NULL")
    @Size(max = 250)
    private String description;

    @NotBlank(message = "address no puede estar vacío")
    @NotNull(message = "address no puede ser NULL")
    @Size(max = 250)
    private String address;

    @NotBlank(message = "schedule no puede estar vacío")
    @NotNull(message = "schedule no puede ser NULL")
    @Size(max = 100)
    private String schedule;

}
