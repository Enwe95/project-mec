package com.mec.service.user;

import com.mec.entity.UserEntity;
import com.mec.model.User;

import java.util.Optional;

public interface UserService {

    public User registerUser(User user);
    public User findByEmail(String email);

}
