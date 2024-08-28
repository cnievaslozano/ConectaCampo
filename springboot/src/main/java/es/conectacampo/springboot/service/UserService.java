package es.conectacampo.springboot.service;

import es.conectacampo.springboot.dto.UserDTO;
import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.ERole;
import es.conectacampo.springboot.model.Follow;
import es.conectacampo.springboot.model.Role;
import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.repository.UserRepository;
import es.conectacampo.springboot.dto.CreateUserDTO;
import es.conectacampo.springboot.dto.UpdateUserDTO;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.module.ResolutionException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FollowService followService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private UserDTO convertToDTO(User user) {

        return UserDTO.builder()
                .id(user.getId())
                .following(user.getFollowing())
                .followers(user.getFollowers())
                .products(user.getProducts())
                .roles(user.getRoles())
                .city(user.getCity())
                .name(user.getName())
                .surname(user.getSurname())
                .username(user.getUsername())
                .email(user.getEmail())
                .telephone(user.getTelephone())
                .aboutMe(user.getAboutMe())
                .pathProfileImage(user.getPathProfileImage())
                .build();
    }

    // CRUD USERS
    public List<UserDTO> getUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + id));
        return convertToDTO(user);
    }

    public UserDTO getUserByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this username -> " + username));
        return convertToDTO(user);
    }

    @Transactional
    public User createUser(CreateUserDTO createUserDTO) {
        Set<Role> roles = createUserDTO.getRoles().stream()
                .map(role -> Role.builder()
                        .name(ERole.valueOf(role))
                        .build())
                .collect(Collectors.toSet());

        User user = User.builder()
                .email(createUserDTO.getEmail())
                .telephone(createUserDTO.getTelephone())
                .name(createUserDTO.getName())
                .surname(createUserDTO.getSurname())
                .username(createUserDTO.getUsername())
                .password(passwordEncoder.encode(createUserDTO.getPassword()))
                .city(createUserDTO.getCity())
                .roles(roles)
                .pathProfileImage(createUserDTO.getPathProfileImage())
                .build();

        return userRepository.save(user);
    }

    @Transactional
    public User updateUser(Long id, UpdateUserDTO updateUserDTO) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado para este id ->" + id));

        // Actualizar otros campos del usuario
        user.setTelephone(updateUserDTO.getTelephone());
        user.setCity(updateUserDTO.getCity());
        user.setPathProfileImage(updateUserDTO.getPathProfileImage());
        user.setAboutMe(updateUserDTO.getAboutMe());
        user.setName(updateUserDTO.getName());
        user.setSurname(updateUserDTO.getSurname());
        user.setUsername(updateUserDTO.getUsername());

        // Guardar y devolver el usuario actualizado
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + id));
        userRepository.delete(user);
    }
}
