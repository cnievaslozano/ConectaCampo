package es.conectacampo.springboot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "publication_product")
public class PublicationProduct {

    @EmbeddedId
    private PublicationProductId id;

    @ManyToOne
    @MapsId("productId")
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @MapsId("publicationId")
    @JoinColumn(name = "publication_id")
    private Publication publication;

    public PublicationProduct(Product product, Publication publication) {
        this.product = product;
        this.publication = publication;
        this.id = new PublicationProductId(product.getId(), publication.getId());
    }
}
