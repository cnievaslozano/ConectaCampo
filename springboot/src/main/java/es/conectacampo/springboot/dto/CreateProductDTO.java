package es.conectacampo.springboot.dto;

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
public class CreateProductDTO {

    @NotBlank(message = "UserId no puede estar vacío")
    @NotNull(message = "UserId no puede ser NULL")
    private long userId;

    @NotBlank(message = "categoryId no puede estar vacío")
    @NotNull(message = "categoryId no puede ser NULL")
    private Set<Long> categoryIds;

    @NotBlank(message = "name no puede estar vacío")
    @NotNull(message = "name no puede ser NULL")
    @Size(max = 50)
    private String name;

    @Size(max = 250)
    private String description;

    @NotBlank(message = "price no puede estar vacío")
    @NotNull(message = "price no puede ser NULL")
    private double price;

    @NotBlank(message = "quantity no puede estar vacío")
    @NotNull(message = "quantity no puede ser NULL")
    private int quantity;

}
