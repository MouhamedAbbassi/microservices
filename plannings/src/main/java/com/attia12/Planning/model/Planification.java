package com.attia12.Planning.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data

public class Planification {
    @Id
    @GeneratedValue
    private Long id;
    private Date startDate;
    private Date endDate;
    private String etat;

}
