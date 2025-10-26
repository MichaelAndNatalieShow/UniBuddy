package com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.unibuddy.models.CommunityCollege;

public interface CommunityCollegeRepository extends JpaRepository<CommunityCollege, Long> {
    Optional<CommunityCollege> findByCollegeId(Long id);
}
