package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransferPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "major_id", nullable = false)
    private Major major;

    @ManyToOne
    @JoinColumn(name = "community_college_id", nullable = false)
    private CommunityCollege communityCollege;

    @ManyToMany
    @JoinTable(
            name = "transfer_plan_courses",
            joinColumns = @JoinColumn(name = "transfer_plan_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses;
}
