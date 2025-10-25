package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String courseCode;
    private String department;
    private String title;
    private int credits;

    private boolean offeredFall;
    private boolean offeredSpring;
    private boolean offeredSummer;

    private String calgetcArea;
    private String breadthCategory;
}
