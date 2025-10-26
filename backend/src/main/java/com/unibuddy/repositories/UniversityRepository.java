package com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.University;
import java.util.List;
import java.util.Optional;

public interface UniversityRepository extends JpaRepository<University, Long> {
    Optional<University> findByUniversityId(Long id);

    Optional<University> findByUniversityName(String name);

    List<University> findByTagEligible(boolean tagEligible);
}
