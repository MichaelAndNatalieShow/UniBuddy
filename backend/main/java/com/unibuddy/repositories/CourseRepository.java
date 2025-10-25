package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.Course;
public interface CourseRepository extends JpaRepository(Course, Long){
    Course findByCourseId(String id);
}