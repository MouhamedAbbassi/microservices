package com.example.courservice.Service.Implementation;

import com.example.courservice.Entities.Cour;
import com.example.courservice.Repository.CourRepository;
import com.example.courservice.Service.CourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourServiceImpl implements CourService {

    @Autowired
    private CourRepository courRepository;

    @Override
    public void saveCour(Cour cour) {
        courRepository.save(cour);
    }

    @Override
    public List<Cour> findAllCours() {
        return courRepository.findAll();
    }

    @Override
    public Cour getCourById(Integer id) {
        return courRepository.findById(id).orElse(null);
    }

    @Override
    public Cour updateCour(Integer id, Cour updatedCour) {
        if (courRepository.existsById(id)) {
            // Récupère l'entité existante de la base de données
            Cour existingCour = courRepository.findById(id).orElse(null);

            if (existingCour != null) {
                // Met à jour les propriétés spécifiques
                existingCour.setRate(updatedCour.getRate());
                existingCour.setTypeCour(updatedCour.getTypeCour());

                // Enregistre l'entité mise à jour dans la base de données
                return courRepository.save(existingCour);
            }
        }
        return null; // Gérer le cas où l'entité n'est pas trouvée

    }

    @Override
    public void deleteCour(Integer id) {

        courRepository.deleteById(id);

    }
}
