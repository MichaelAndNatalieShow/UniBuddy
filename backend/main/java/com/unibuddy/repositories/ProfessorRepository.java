package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.Professor;
public interface ProfessorRepository extends JpaRepository(Professor, Long){
    Professor findByProfessorId(String id);
}