package com.mec.model;

import com.mec.entity.RoleEntity;
import lombok.*;

import java.util.Set;

@Data
public class User {

    private Integer id;
    private String nom;
    private String prenom;
    private String telephone;
    private String email;
    private String mdp;
    private Set<Role> roles;
}
