package fr.stockflow.projet.service;



import fr.stockflow.projet.Login;
import fr.stockflow.projet.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

  @Autowired
  private LoginRepository loginRepository;

  public boolean authenticate(String email, String password) {
    // Recherche l'utilisateur par e-mail
    Login user = loginRepository.findByEmail(email);

    // Vérifie si l'utilisateur existe et si le mot de passe correspond
    return user != null && user.getPassword().equals(password);
  }

  public Login findUserByEmail(String email) {
    return loginRepository.findByEmail(email);
  }
}


