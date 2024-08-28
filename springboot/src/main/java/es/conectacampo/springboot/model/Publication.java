package es.conectacampo.springboot.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "publications")
public class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // RELATION - USER
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // RELATION - PRODUCTS
    @OneToMany(mappedBy = "publication")
    @JsonIgnore
    private List<PublicationProduct> publicationProducts;

    // RELATION - LIKES
    @OneToMany(mappedBy = "publication", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    //@JsonIgnore
    private List<Like> likes;

    public Publication(Long publicationId) {
    }

    // FUNCTIONS - LIKES
    public void addLike(Like like) {
        likes.add(like);
        like.setPublication(this);
    }

    public void removeLike(Like like) {
        likes.remove(like);
        like.setPublication(null);
    }

    public int getLikeCount() {
        return likes.size();
    }

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "schedule", nullable = false, length = 100)
    private String schedule;

    @Column(name = "active", nullable = false)
    private boolean active = true;

    @Column(name = "path_publication_Image")
    private String pathPublicationImage;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Timestamp createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Timestamp(System.currentTimeMillis());
    }

}