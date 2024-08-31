package es.conectacampo.springboot.dto;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import es.conectacampo.springboot.model.Follow;
import es.conectacampo.springboot.model.Product;
import es.conectacampo.springboot.model.Role;
import jakarta.persistence.*;
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
public class UserDTO {
    private Long id;
    private List<Follow> following;
    private List<Follow> followers;
    private Set<Product> products;
    private Set<Role> roles;
    private String city;
    private String name;
    private String surname;
    private String username;
    private String email;
    private String telephone;
    private String aboutMe;
    private String pathProfileImage;
}
