package es.conectacampo.springboot.service;

import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    // get all users
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // get one user
    public Optional<User> getUserById (Long id){
        return userRepository.findById(id);
    }

    // save || update user
    public void saveOrUpdate(User user) {
        userRepository.save(user);
    }

    // delete user
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
