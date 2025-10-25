package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommunityCollege {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String collegeName;

    @ManyToMany
    @JoinTable(
            name = "community_college_university",
            joinColumns = @JoinColumn(name = "community_college_id"),
            inverseJoinColumns = @JoinColumn(name = "university_id")
    )
    private List<University> articulatedUniversities;
}
