package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeachingStyle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private float weightedScore;
    private float pacing;
    private float workload;
    private float structure;
    private float availability;
    private float grading;
    private float atmosphere
}