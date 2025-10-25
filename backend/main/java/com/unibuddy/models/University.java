package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class University {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long universityId;
    private String universityName;
    private boolean tagEligible;
    private List<Major> articulatedMajors;
}