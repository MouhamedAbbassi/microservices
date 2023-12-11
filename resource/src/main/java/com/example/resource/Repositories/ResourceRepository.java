package com.example.resource.Repositories;

 import com.example.resource.Entities.Resource;
 import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource,Long> {
}
