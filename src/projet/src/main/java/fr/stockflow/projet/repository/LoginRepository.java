package fr.stockflow.projet.repository;


import fr.stockflow.projet.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, String> {


  Login findByEmail(String email);


}
