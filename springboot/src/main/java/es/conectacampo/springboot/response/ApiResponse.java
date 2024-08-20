package es.conectacampo.springboot.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class ApiResponse {
    private String status;
    private String message;

    public ApiResponse(String success, String userFollowedSuccessfully) {
    }
}
