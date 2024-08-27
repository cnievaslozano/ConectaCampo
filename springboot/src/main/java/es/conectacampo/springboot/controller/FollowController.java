package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.model.Follow;
import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/follow")
public class FollowController {

    @Autowired
    private FollowService followService;

    @GetMapping("/all")
    public ResponseEntity<List<Follow>> getAllFollows() {
        List<Follow> follows = followService.getAllFollows();
        return ResponseEntity.ok(follows);    }

    // Get one user by i
}
