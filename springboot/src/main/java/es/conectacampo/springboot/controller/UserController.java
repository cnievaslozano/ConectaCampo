package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.response.ApiResponse;
import es.conectacampo.springboot.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    // Follow a user
    @PostMapping("/{userId}/follow/{followUserId}")
    public ResponseEntity<User> followUser(@PathVariable Long userId, @PathVariable Long followUserId) {
        User user = userService.followUser(userId, followUserId);
        return ResponseEntity.ok(user);
    }

    // Unfollow a user
    @PostMapping("/{userId}/unfollow/{unfollowUserId}")
    public ResponseEntity<User> unfollowUser(@PathVariable Long userId, @PathVariable Long unfollowUserId) {
        User user = userService.unfollowUser(userId, unfollowUserId);
        return ResponseEntity.ok(user);
    }

    // Get all users
    @GetMapping("/all")
    public List<User> getAllUsers() {
          return userService.getUsers();
    }

    // Get one user by id
    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    // Get one user by username

    /* Create User
    @PostMapping
    public ResponseEntity<ApiResponse> createUser(@RequestBody User user) {
        try {
            userService.createUser(user);
            return ResponseEntity.ok(new ApiResponse("success", "User " + user.getUsername() + " created successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error", "Error creating user: "+ user.getUsername() + e.getMessage()));
        }
    }
    */
    // Update User
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        try {
            userService.updateUser(id, userDetails);
            return ResponseEntity.ok(new ApiResponse("success", "User "+ userDetails.getUsername() +" updated successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error", "Error updating user: " + userDetails.getUsername() + e.getMessage()));
        }
    }

    // Delete User
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long id){
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok(new ApiResponse("success", "User deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error", "Error deleting user: " + e.getMessage()));
        }
    }
}
