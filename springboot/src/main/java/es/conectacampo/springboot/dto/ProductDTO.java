package es.conectacampo.springboot.dto;

import es.conectacampo.springboot.model.Category;
import es.conectacampo.springboot.model.Publication;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private Long id;
    private Long userId;
    private List<Category> categories;
    private List<Publication> publications;
    private String name;
    private String description;
    private double price;
    private int quantity;


}
