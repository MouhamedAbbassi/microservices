package tn.esprit.reclamations.controllers;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.reclamations.entities.Reclamation;
import tn.esprit.reclamations.entities.StatutReclamation;
import tn.esprit.reclamations.services.ReclamationServiceInt;


@RestController
@RequestMapping("reclamations")
@AllArgsConstructor
public class ReclamationRestApi {
    private ReclamationServiceInt reclamationServiceInt;
    @GetMapping(value="get-reclamations" )
    @ResponseStatus(HttpStatus.OK)
    public   ResponseEntity<Reclamation> getAllReclamations(){
        return new ResponseEntity(reclamationServiceInt.getAllReclamations(),HttpStatus.OK);
    }
    @GetMapping(value="get-reclamationById")
    @ResponseStatus(HttpStatus.OK)
    public   ResponseEntity<Reclamation> getReclamationById(@RequestParam Long id){
        return new ResponseEntity(reclamationServiceInt.getReclamationById(id),HttpStatus.OK);
    }

    @PostMapping(value="save-rec")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Reclamation> createReclamation(@RequestBody Reclamation reclamation){
        return new  ResponseEntity(reclamationServiceInt.createReclamation(reclamation),HttpStatus.CREATED);

    }

    @PutMapping(value = "put-rec")
    public ResponseEntity<Reclamation> updateReclamation(@RequestBody Reclamation updatedReclamation){
        return new ResponseEntity(reclamationServiceInt.updateReclamation(updatedReclamation),HttpStatus.OK);
    }
    @DeleteMapping(value = "/del-rec")
    @ResponseStatus(HttpStatus.OK)
    public void deleteReclamation(@RequestParam Long id){
        reclamationServiceInt.deleteReclamation(id);
    }
    @GetMapping(value="/getByStatut")
    @ResponseStatus(HttpStatus.OK)
    public  ResponseEntity<Reclamation> getReclamationsByStatut(@RequestParam StatutReclamation statut){
        return new ResponseEntity(reclamationServiceInt.getReclamationsByStatut(statut),HttpStatus.OK);
    }
    @GetMapping(value="/getBySujet")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Reclamation> getReclamationsBySujet(@RequestParam String sujet){
        return new ResponseEntity(reclamationServiceInt.getReclamationsBySujet(sujet),HttpStatus.OK);
    }

    @PutMapping("/changerStatut")
    public ResponseEntity<Reclamation> changerStatutReclamation(
            @RequestParam Long idReclamation,
            @RequestBody Reclamation nouvelleReclamation) {
        // Logique de traitement dans le service
        Reclamation reclamation = reclamationServiceInt.changerStatutReclamation(idReclamation, nouvelleReclamation.getStatut());
        return new ResponseEntity<>(reclamation, HttpStatus.OK);
    }

}
