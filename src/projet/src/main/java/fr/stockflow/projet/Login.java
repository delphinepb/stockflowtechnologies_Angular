
package fr.stockflow.projet;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "login")
public class Login {


  @Id
  @Column
  private String email;
  @Column
  private String password;


  public String getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }
}
