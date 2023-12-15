package tn.esprit.reclamations.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.reclamations.entities.Reclamation;
import tn.esprit.reclamations.entities.StatutReclamation;

import java.util.Date;
import java.util.List;

public interface ReclamationRepoInt extends JpaRepository<Reclamation,Long> {
    List<Reclamation> findReclamationByStatutLike(StatutReclamation statut);
    @Query("SELECT r from Reclamation r where r.sujet=:sujet")
    List<Reclamation> getReclamationBySujet(@Param("sujet") String sujet);
}
