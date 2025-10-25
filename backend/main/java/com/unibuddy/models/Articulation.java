package backend.main.java.com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Articulation {
    @Id
    @GeneratedValue(strategy = GeneratedType.IDENTITY)
    private String articulationTitle;
}