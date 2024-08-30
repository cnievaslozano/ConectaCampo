package es.conectacampo.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;
import java.io.Serializable;
import java.util.Objects;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PublicationProductId that = (PublicationProductId) o;
        return Objects.equals(productId, that.productId) &&
                Objects.equals(publicationId, that.publicationId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(productId, publicationId);
    }
}
