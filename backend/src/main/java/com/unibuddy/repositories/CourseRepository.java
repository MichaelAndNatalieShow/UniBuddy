package com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.unibuddy.models.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
    Optional<Course> findByCourseId(Long id);
}
