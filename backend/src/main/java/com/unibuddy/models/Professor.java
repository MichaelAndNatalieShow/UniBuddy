package com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long professorId;

    private String professorName;
    private String department;
    private String positionTitle;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "style_profile_id", referencedColumnName = "id")
    private StyleProfile styleProfile;
}
