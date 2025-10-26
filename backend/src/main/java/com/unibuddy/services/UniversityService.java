package com.unibuddy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unibuddy.repositories.UniversityRepository;
import com.unibuddy.models.University;

import java.util.List;
import java.util.Optional;

@Service
public class UniversityService {

    @Autowired
    private UniversityRepository universityRepository;

    public List<University> getAllUniversities() {
        return universityRepository.findAll();
    }

    public Optional<University> getUniversityById(Long universityId) {
        return universityRepository.findById(universityId);
    }

    public University saveUniversity(University university) {
        return universityRepository.save(university);
    }

    public void deleteUniversity(Long id) {
        universityRepository.deleteById(id);
    }
}
