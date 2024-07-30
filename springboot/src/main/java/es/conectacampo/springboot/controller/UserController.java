package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
          return userService.getUsers();
    }

    // Get one user
    @GetMapping("/{userId}")
    public Optional<User> getUserById(@PathVariable("userId") Long userId){
        return userService.getUserById(userId);
    }

    // Create User
    @PostMapping
    public void save(@RequestBody User user){
        userService.saveOrUpdate(user);
    }

    // Update User
    @PutMapping
    public void update(@RequestBody User user){
        userService.saveOrUpdate(user);
    }

    // Delete User
    @DeleteMapping("/{userId}")
    public void delete(@PathVariable("userId") Long userId){
        userService.delete(userId);
    }
}
