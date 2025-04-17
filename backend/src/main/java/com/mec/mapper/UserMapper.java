package com.mec.mapper;

import com.mec.entity.UserEntity;
import com.mec.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserEntity toEntity(User user);
    User toModel(UserEntity userEntity);
}
