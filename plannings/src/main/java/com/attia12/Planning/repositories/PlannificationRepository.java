package com.attia12.Planning.repositories;

import com.attia12.Planning.model.Planification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PlannificationRepository extends JpaRepository<Planification,Long> {
}
