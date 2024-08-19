package es.conectacampo.springboot.service;

import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.ERole;
import es.conectacampo.springboot.model.Role;
import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.repository.UserRepository;
import es.conectacampo.springboot.dto.CreateUserDTO;
import es.conectacampo.springboot.dto.UpdateUserDTO;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // CRUD USERS
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + id));
        return Optional.ofNullable(user);
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
                .build();

        return userRepository.save(user);
    }

    @Transactional
    public User updateUser(Long id, UpdateUserDTO updateUserDTO) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResolutionException("User not found for this id ->" + id));

        user.setTelephone(updateUserDTO.getTelephone());
        user.setCity(updateUserDTO.getCity());
        user.setPassword(passwordEncoder.encode(updateUserDTO.getPassword()));
        user.setAboutMe(updateUserDTO.getAboutMe());

        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + id));
        userRepository.delete(user);
    }
}
