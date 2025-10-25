package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.TeachingStyle;
public interface TeachingStyleRepository extends JpaRepository(TeachingStyle, Long){
}