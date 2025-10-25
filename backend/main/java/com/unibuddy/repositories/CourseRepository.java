package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.Course;
public interface CourseRepository extends JpaRepository(String course, Long id){
    Course findByCourseId(String id);
}