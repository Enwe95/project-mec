package com.mec.mapper.dto;

import com.mec.dto.UserDTO;
import com.mec.entity.UserEntity;
import com.mec.model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserDtoMapper {

    User toModel(UserDTO userDTO);
    UserDTO toDto(User user);
}
