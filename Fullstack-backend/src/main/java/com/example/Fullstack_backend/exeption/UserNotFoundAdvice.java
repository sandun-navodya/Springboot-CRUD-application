package com.example.Fullstack_backend.exeption;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;


@ControllerAdvice
public class UserNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(UserNotFoundExeption.class)

    public Map<String, String> handleUserNotFound(UserNotFoundExeption ex) {
        return Map.of("error", ex.getMessage());
    }
}
