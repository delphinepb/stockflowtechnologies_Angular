package fr.stockflow.projet;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "categorie")
public class Categorie {

  @Id
  @Column
  private int id;

  @Column
  private String nom;

}
