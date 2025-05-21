package com.example.Fullstack_backend.exeption;

import com.example.Fullstack_backend.controller.UserControllar;

public class UserNotFoundExeption extends RuntimeException {
    public UserNotFoundExeption(long id) {
        super("Could not find user " + id);
    }

    public UserNotFoundExeption(String stdId) {
        super("Could not find user " + stdId);
    }
}

