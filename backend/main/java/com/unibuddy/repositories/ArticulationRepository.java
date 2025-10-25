package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.Articulation;
public interface ArticulationRepository extends JpaRepository(Articulation, Long){
    Articulation findByArticulationId(String id);
}