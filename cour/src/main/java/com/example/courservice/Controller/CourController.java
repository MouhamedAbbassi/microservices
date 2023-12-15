package com.example.courservice.Controller;

import com.example.courservice.Entities.Cour;
import com.example.courservice.Service.CourService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cours")
public class CourController {

    @Autowired
    private CourService courService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Cour cour){
        courService.saveCour(cour);
    }

    @GetMapping("/")
    public ResponseEntity<List<Cour>> findAllCours(){
        return ResponseEntity.ok(courService.findAllCours());
    }



    @GetMapping("afficher/{id}")
    public ResponseEntity<Cour> getCourById(@PathVariable Integer id) {
        Cour cour = courService.getCourById(id);
        if (cour != null) {
            return new ResponseEntity<>(cour, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("update/{id}")
    public ResponseEntity<Cour> updateCour(@PathVariable Integer id, @RequestBody Cour cour) {
        Cour updatedCour = courService.updateCour(id, cour);
        if (updatedCour != null) {
            return new ResponseEntity<>(updatedCour, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/supprimer/{id}")
    public ResponseEntity<Void> deleteCour(@PathVariable Integer id) {
        courService.deleteCour(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
