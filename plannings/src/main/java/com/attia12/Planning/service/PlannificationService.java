package com.attia12.Planning.service;

import com.attia12.Planning.model.Planification;
import com.attia12.Planning.repositories.PlannificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PlannificationService {
    @Autowired
    private PlannificationRepository plannificationRepository;



    public List<Planification> findAll() {
        return plannificationRepository.findAll();
    }

    public Planification addPlanification(Planification planification)
    {
        return plannificationRepository.save(planification);

    }
    public Planification updatePlanification(Long id, Planification newPlanification)
    {
        if(plannificationRepository.findById(id).isPresent())
        {Planification planificationExist=plannificationRepository.findById(id).get();
            planificationExist.setStartDate(newPlanification.getStartDate());
            planificationExist.setEndDate(newPlanification.getEndDate());
            planificationExist.setEtat(newPlanification.getEtat());

            return plannificationRepository.save(planificationExist);
        }
        else
            return null;
    }

    public String deletePlanification(Long id) {
        if (plannificationRepository.findById(id).isPresent()) {
            plannificationRepository.deleteById(id);
            return "plannification supprimé";
        } else
            return "plannification non supprimé";
    }
}
