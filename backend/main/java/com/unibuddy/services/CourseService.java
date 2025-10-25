package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.CourseRepository;
import com.unibuddy.models.Course;

import java.util.List;

@Service
public class CourseService{

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses(){
        return courseRepository.findAll();
    }

    public Course getCourseById(Long courseId){
        return courseRepository.findById(courseId).orElse(null);
    }

    public Course saveCourse(Course course){
        return courseRepository.save(course);
    }

    public void deleteCourse(LongId){
        return courseRepository.deleteById(id);
    }
}