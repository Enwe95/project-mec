package com.mec.controller;

import com.mec.service.auth.JwtService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AuthController {

    /*POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-token
*/
    @Autowired
    private JwtService jwtService;

    @PostMapping("/auth")
    public Response login(@RequestParam String email, @RequestParam String password) {
        return null;
    }
}
