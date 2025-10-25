package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.University;
public interface UniversityRepository extends JpaRepository(University, Long){
    University findByUniversityId(String id);
}