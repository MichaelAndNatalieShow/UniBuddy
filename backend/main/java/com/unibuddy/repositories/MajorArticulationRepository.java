package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.unibuddy.models.MajorArticulation;

public interface MajorArticulationRepository extends JpaRepository<MajorArticulation, Long> {
    Optional<MajorArticulation> findByMajorId(Long id);
}
