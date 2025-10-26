package com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.StyleProfile;
import java.util.List;

public interface StyleProfileRepository extends JpaRepository<StyleProfile, Long> {

    List<StyleProfile> findByWeightedScoreGreaterThan(float minScore);

    List<StyleProfile> findByPacing(float pacing);
    List<StyleProfile> findByClarityBetween(float min, float max);
    List<StyleProfile> findByWorkloadBetween(float min, float max);
    List<StyleProfile> findByStructureBetween(float min, float max);
    List<StyleProfile> findByAvailabilityBetween(float min, float max);
    List<StyleProfile> findByGradingBetween(float min, float max);
    List<StyleProfile> findByAtmosphereBetween(float min, float max);

    List<StyleProfile> findTop10ByOrderByWeightedScoreDesc();

    List<StyleProfile> findByPacingBetweenAndWorkloadBetweenAndAtmosphereBetween(
            float pacingMin, float pacingMax,
            float workloadMin, float workloadMax,
            float atmosphereMin, float atmosphereMax
    );
}
