package fr.stockflow.projet.controller;


import fr.stockflow.projet.Login;
import fr.stockflow.projet.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
public class LoginController {

  @Autowired
  private LoginService loginService;

  @PostMapping("/authenticate")
  public ResponseEntity<String> authenticate(@RequestBody Login credentials) {
    String email = credentials.getEmail();
    String password = credentials.getPassword();


    Login user = loginService.findUserByEmail(email);

    if (user != null && user.getPassword().equals(password)) {

      return new ResponseEntity<>("Authentification réussie", HttpStatus.OK);
    } else {

      return new ResponseEntity<>("Échec de l'authentification. Veuillez vérifier vos informations d'identification.", HttpStatus.UNAUTHORIZED);
    }
  }
}

