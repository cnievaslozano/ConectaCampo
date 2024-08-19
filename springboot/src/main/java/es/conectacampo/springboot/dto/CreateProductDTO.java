package es.conectacampo.springboot.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
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

    @NotNull(message = "UserId no puede ser NULL")
    private Long userId;

    @NotEmpty(message = "categoryIds no puede estar vacío")
    private Set<Long> categoryIds;

    @NotBlank(message = "name no puede estar vacío")
    @Size(max = 50)
    private String name;

    @Size(max = 250)
    private String description;

    @NotNull(message = "price no puede ser NULL")
    private Double price;

    @NotNull(message = "quantity no puede ser NULL")
    private Integer quantity;
}
