package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CalGETCArea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int sectionNumber;
    private String areaName;
    private char sectionLetter;
    private String sectionName;
    private String courseName;
    private String courseTitle;
    private int courseCredits;
}