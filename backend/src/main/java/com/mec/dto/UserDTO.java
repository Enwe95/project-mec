package com.mec.dto;

import lombok.*;

import java.time.LocalDate;

@Data
public class UserDTO {

    private Integer id;
    private String nom;
    private LocalDate dateNaissance;
    private String prenom;
    private String telephone;
    private String email;
    private String mdp;


}
