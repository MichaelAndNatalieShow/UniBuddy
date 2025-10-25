package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MajorArticulation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String courseId;
    private String ucCampus;
    private String ucCourseFulfillment;
    private String ucCourseId;
    private String ucCourseTitle;
    private String majorsApplicable;
    private String requirementType;
    private String notes;
}
