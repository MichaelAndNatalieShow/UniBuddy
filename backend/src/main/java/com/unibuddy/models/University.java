package com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class University {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long universityId;
    private String universityName;

    // One university can have many majors
    @OneToMany(mappedBy = "ucCampus", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<MajorArticulation> articulatedMajors;
}
