package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.Major;
public interface MajorRepository extends JpaRepository(Major, Long){
    Major findByMajorId(String id);
}