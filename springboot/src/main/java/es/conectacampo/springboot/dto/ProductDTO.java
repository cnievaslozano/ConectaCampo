package es.conectacampo.springboot.dto;

import es.conectacampo.springboot.model.Category;
import es.conectacampo.springboot.model.Publication;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private Long id;
    private Long userId;
    @NotNull(message = "Publication ID no puede ser nulo")
    private Long publicationId;
    private List<Category> categories;
   // private Set<PublicationProductDTO> publicationProducts;
    private String name;
    private String description;
    private double price;
    private int quantity;

}
