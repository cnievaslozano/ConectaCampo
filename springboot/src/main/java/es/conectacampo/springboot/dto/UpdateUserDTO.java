package es.conectacampo.springboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserDTO {
    private String telephone;
    private String city;
    private String password;
    private String aboutMe;
}
