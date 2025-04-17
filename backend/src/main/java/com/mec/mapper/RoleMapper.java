package com.mec.mapper;

import com.mec.entity.RoleEntity;
import com.mec.entity.UserEntity;
import com.mec.model.Role;
import com.mec.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface RoleMapper {

    RoleMapper INSTANCE = Mappers.getMapper(RoleMapper.class);

    RoleEntity toEntity(Role user);
    Role toModel(RoleEntity userEntity);
}
