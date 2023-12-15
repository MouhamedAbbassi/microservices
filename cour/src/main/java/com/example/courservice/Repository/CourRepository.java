package com.example.courservice.Repository;

import com.example.courservice.Entities.Cour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourRepository extends JpaRepository<Cour,Integer> {
}
