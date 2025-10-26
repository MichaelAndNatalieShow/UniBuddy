package com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StyleProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private float weightedScore;
    private float pacing;
    private float clarity;
    private float workload;
    private float structure;
    private float availability;
    private float grading;
    private float atmosphere;

    @Enumerated(EnumType.STRING)
    private ProfileType type;

    public enum ProfileType {
        LEARNING,
        TEACHING
    }
}
