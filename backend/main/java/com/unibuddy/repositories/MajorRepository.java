package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.unibuddy.models.Major;

public interface MajorRepository extends JpaRepository<Major, Long> {
    Optional<Major> findByMajorId(Long id);
}
