package tn.esprit.reclamations.services;

import tn.esprit.reclamations.entities.Reclamation;
import tn.esprit.reclamations.entities.StatutReclamation;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface ReclamationServiceInt {
    List<Reclamation> getAllReclamations();

    Reclamation getReclamationById(Long id);

    // List<Reclamation> getReclamationsByUserId(Long userId);

    Reclamation createReclamation(Reclamation reclamation);



    Reclamation updateReclamation(Reclamation updatedReclamation);

    void deleteReclamation(Long id);
    List<Reclamation> getReclamationsByStatut(StatutReclamation statut);
    List<Reclamation> getReclamationsBySujet(String sujet);
    Reclamation changerStatutReclamation(Long idReclamation, StatutReclamation nouveauStatut);


}
