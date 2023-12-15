package tn.esprit.reclamations.services;

 import jakarta.persistence.EntityNotFoundException;
 import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.reclamations.entities.Reclamation;
import tn.esprit.reclamations.entities.StatutReclamation;
import tn.esprit.reclamations.repositories.ReclamationRepoInt;

 import java.time.LocalDateTime;
 import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ReclamationService implements ReclamationServiceInt{
    private ReclamationRepoInt reclamationRepoInt;
    @Override
    public List<Reclamation> getAllReclamations() {
        return reclamationRepoInt.findAll();
    }

    @Override
    public Reclamation getReclamationById(Long id) {
        Optional<Reclamation> rec= this.reclamationRepoInt.findById(id);
        if(rec.isPresent()) {
            Reclamation reclamation = rec.get();
            return reclamation;
        }
        return null;
    }

   /* @Override
    public List<Reclamation> getReclamationsByUserId(Long userId) {
        return null;
    }*/

    @Override
    public Reclamation createReclamation(Reclamation reclamation) {
        // Set default values if not provided
        if (reclamation.getStatut() == null) {
            reclamation.setStatut(StatutReclamation.EN_ATTENTE);
        }

        if (reclamation.getDateReclamation() == null) {
            reclamation.setDateReclamation(LocalDateTime.now());
        }

        // Save the reclamation
        return reclamationRepoInt.save(reclamation);
    }
    @Override
    public Reclamation updateReclamation( Reclamation updatedReclamation) {
        return reclamationRepoInt.save(updatedReclamation);
    }

    @Override
    public void deleteReclamation(Long id) {
        reclamationRepoInt.deleteById(id);
    }

    @Override
    public List<Reclamation> getReclamationsByStatut(StatutReclamation statut) {
        return reclamationRepoInt.findReclamationByStatutLike(statut);
    }

    @Override
    public List<Reclamation> getReclamationsBySujet(String sujet) {
        return reclamationRepoInt.getReclamationBySujet(sujet);
    }

    @Override
    public Reclamation changerStatutReclamation(Long idReclamation, StatutReclamation nouveauStatut) {
        Reclamation reclamation = reclamationRepoInt.findById(idReclamation)
                .orElseThrow(() -> new EntityNotFoundException("Réclamation non trouvée avec l'ID : " + idReclamation));

        reclamation.setStatut(nouveauStatut);

        return reclamationRepoInt.save(reclamation);
    }
}
