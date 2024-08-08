package es.conectacampo.springboot.service;

import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User unfollowUser(Long userId, Long unfollowUserId) {
        Optional<User> userOptional = Optional.ofNullable(userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + userId)));
        Optional<User> unfollowUserOptional = Optional.ofNullable(userRepository.findById(unfollowUserId)
                .orElseThrow(() -> new ResourceNotFoundException("Unfollower user not found for this id -> " + unfollowUserId)));

        User user = userOptional.get();
        User unfollowUser = unfollowUserOptional.get();
        user.getFollowing().remove(unfollowUser);
        unfollowUser.getFollowers().remove(user);
        userRepository.save(user);
        userRepository.save(unfollowUser);
        return user;

    }

    // get all users
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // get one user
    public Optional<User> getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + id));
        return Optional.ofNullable(user);
    }

    // create user
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // update user
    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResolutionException("User not found for this id ->" + id));

        user.setLocation(userDetails.getLocation());
        user.setRole(userDetails.getRole());
        user.setName(userDetails.getName());
        user.setSurname(userDetails.getSurname());
        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        user.setEmail(userDetails.getEmail());
        user.setTelephone(userDetails.getTelephone());
        // replace collection
        user.getProducts().clear();
        user.getProducts().addAll(user.getProducts());

        return userRepository.save(user);

    }

    // delete user
    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + id));
        userRepository.delete(user);
    }
}
