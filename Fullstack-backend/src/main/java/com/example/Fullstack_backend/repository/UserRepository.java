package com.example.Fullstack_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Fullstack_backend.model.user;

import java.util.Optional;

public interface UserRepository extends JpaRepository<user, Long> {
    Optional<user> findByStdId(String stdId);
}