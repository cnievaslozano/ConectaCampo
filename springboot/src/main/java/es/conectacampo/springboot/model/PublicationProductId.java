package es.conectacampo.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PublicationProductId implements Serializable {

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "publication_id")
    private Long publicationId;
}
