package com.example.resource.Entities;

import jakarta.persistence.*;
import lombok.*;
 @Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
@ToString
@Table(name = "Resource")
public class Resource {
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private long id;
    @Column(name = "nom",nullable = false)
    private String nom;
    @Column(name = "description",nullable = false)
    private String description;





}
