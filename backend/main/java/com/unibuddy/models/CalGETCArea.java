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

    private int areaNumber;
    private String areaName;
    private String sectionLetter;
    private String sectionName;
    private String courseNumber;
    private String courseTitle;
    private int units;
    private String courseDesc;
}
