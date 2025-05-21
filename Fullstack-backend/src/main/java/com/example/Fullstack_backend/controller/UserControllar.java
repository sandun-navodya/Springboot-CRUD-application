package com.example.Fullstack_backend.controller;

import com.example.Fullstack_backend.exeption.UserNotFoundExeption;
import com.example.Fullstack_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.Fullstack_backend.model.user;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserControllar {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
            user newUser(@RequestBody user newUser) {
            return userRepository.save(newUser);
        }


    @GetMapping("/users")
    List<user> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    user getUserbyId(@PathVariable long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundExeption(id));
    }

    @GetMapping("/user/stdId")
    user getUserByStdId(@RequestParam String stdId) {
        return userRepository.findByStdId(stdId)
                .orElseThrow(() -> new UserNotFoundExeption("Student ID: " + stdId));
    }

    @PutMapping("/user/{id}")
    user updateUser(@RequestBody user newUser, @PathVariable long id) {
        return userRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setStdId(newUser.getStdId());
                    existingUser.setName(newUser.getName());
                    existingUser.setEmail(newUser.getEmail());
                    return userRepository.save(existingUser);
                })
                .orElseThrow(() -> new UserNotFoundExeption(id));
    }

    @DeleteMapping("/user/{id}")
    void deleteUser(@PathVariable long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundExeption(id);
        }
        userRepository.deleteById(id);
    }
}


