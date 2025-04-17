package com.mec.service.user;

import com.mec.entity.UserEntity;
import com.mec.mapper.UserMapper;
import com.mec.model.User;
import com.mec.repository.RoleRepository;
import com.mec.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl  implements UserService{

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,
                           RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User registerUser(User user) {
      /*  if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email déjà utilisé");
        }

        RoleEntity userRole = roleRepository.findByNom("user").orElseThrow(() -> new RuntimeException("Le rôle USER n'existe pas"));
        */
        UserEntity userEntity = userMapper.toEntity(user);
        //userEntity.setMdp(Set.of(userRole).toString());

        UserEntity saved = userRepository.save(userEntity);

        return userMapper.toModel(saved);
    }

    @Override
    public User findByEmail(String email) {
        Optional<UserEntity> entity = userRepository.findByEmail(email);
        return userMapper.toModel(entity.get());
    }
}
