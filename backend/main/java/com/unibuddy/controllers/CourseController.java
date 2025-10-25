package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.CourseService;
import com.unibuddy.models.Course;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigins(origins = "*")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Course> getAllCourses(){
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable id){
        return courseService.getCourseById(id);
    }

    @PostMapping
    public Course createCourse(@RequestBody course){
        return courseService.saveCourse(course);
    }

    @GetMapping("/{id}")
    public void deleteCourse(@PathVariable id){
        return courseService.deleteCourse(id);
    }
}