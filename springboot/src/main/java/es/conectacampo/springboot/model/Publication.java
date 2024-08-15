package es.conectacampo.springboot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
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
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "publication_products",
            joinColumns = @JoinColumn(name = "publication_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> products;

    // RELATION - LIKES
    @OneToMany(mappedBy = "publication", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Like> likes = new ArrayList<>();

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

    @Column(name = "description", columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(name = "address", nullable = false, length = 255)
    private String address;

    @Column(name = "schedule", nullable = false, length = 100)
    private String schedule;

    @Column(name = "active", nullable = false)
    private boolean active = true;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Timestamp createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Timestamp(System.currentTimeMillis());
    }

}
