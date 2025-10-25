package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommunityCollege {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long collegeId;
    private String collegeName;
    private List<String> articulatedColleges;
}