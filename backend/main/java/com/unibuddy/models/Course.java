package backend.main.java.com.unibuddy.models;

 import jakarta.persistence.*;
 import lombok.*;

 @Entity
 @Data
 @NoArgsConstructor
 @AllArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long courseId;
    private String courseDepartment;
    private String courseTitle;
    private int courseCredits;
    private boolean offeredFall;
    private boolean offeredSpring;
    private boolean offeredSummer;
    private String calgetcArea;
    private String breadthCategory;
}