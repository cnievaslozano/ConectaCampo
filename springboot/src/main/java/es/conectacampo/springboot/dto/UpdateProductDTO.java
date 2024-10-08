package es.conectacampo.springboot.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProductDTO {

    @NotNull(message = "name no puede ser NULL")
    @Size(max = 50)
    private String name;

    @Size(max = 250)
    private String description;

    @NotNull(message = "price no puede ser NULL")
    private Double price;

    @NotNull(message = "quantity no puede ser NULL")
    private Integer quantity;

    private Set<Long> categoryIds; // Añadido para actualizar categorías

    private Set<Long> publicationIds; // Añadido para actualizar publicaciones
}
