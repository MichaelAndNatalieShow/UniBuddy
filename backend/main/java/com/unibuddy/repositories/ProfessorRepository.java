package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.unibuddy.models.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
    Optional<Professor> findByProfessorId(Long id);
}
