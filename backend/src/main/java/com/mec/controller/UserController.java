package com.mec.controller;

import com.mec.dto.UserDTO;
import com.mec.mapper.dto.UserDtoMapper;
import com.mec.model.User;
import com.mec.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/users")
//@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userService;
    @Autowired
    private final UserDtoMapper userDtoMapper;

    public UserController(UserService userService, UserDtoMapper userDtoMapper) {
        this.userService = userService;
        this.userDtoMapper = userDtoMapper;
    }


    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
        User user = userDtoMapper.toModel(userDTO);
        User savedUser = userService.registerUser(user);
        return ResponseEntity.ok(userDtoMapper.toDto(savedUser));
    }
}
