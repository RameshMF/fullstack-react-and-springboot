package net.javaguides.todo.service;

import net.javaguides.todo.dto.LoginDto;
import net.javaguides.todo.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
