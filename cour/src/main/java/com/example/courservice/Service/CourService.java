package com.example.courservice.Service;

import com.example.courservice.Entities.Cour;

import java.util.List;

public interface CourService {

    public void saveCour(Cour cour);

    public List<Cour> findAllCours();

    public Cour getCourById(Integer id);

    public Cour updateCour(Integer id, Cour updatedCour);

    public void deleteCour(Integer id);
}
