package backend.main.java.com.unibuddy.models;

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
    @JoinColumn(name = "teaching_style_id", referencedColumnName = "id")
    private TeachingStyle teachingStyle;
}
