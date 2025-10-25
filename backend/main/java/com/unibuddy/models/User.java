package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String userName;
    private String userMajor;
    private String targetCollege;
    private String userSocial;
    private String userPicture;

    private LearningPreference learningPreference;
}