package tn.esprit.reclamations.entities;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@FieldDefaults(level= AccessLevel.PRIVATE)
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Table(name="reclamation")
public class Reclamation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_reclamation")
    Long idReclamation;
    @Column(name="sujet",nullable = false)
    private String sujet;

    @Column(name="description",nullable = false)
    private String description;

    @Column(name="date_reclamation",nullable = false)
    private LocalDateTime dateReclamation = LocalDateTime.now();


    @Enumerated(EnumType.STRING)
    @Column(name="statut",nullable = false)
    private StatutReclamation statut;


}
