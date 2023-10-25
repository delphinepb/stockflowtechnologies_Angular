package fr.stockflow.projet;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "produit")
public class Produit {

  @Id
  private int id;
  @Column
  private int quantite;
  @Column
  private int prix;
  @Column
  private String nom;






  private int getId(){
    return id;
  }

  private String getNom(){
    return nom;
  }

  private int getQuantite(){
    return quantite;
  }

  private int getPrix(){
    return prix;
  }
}
