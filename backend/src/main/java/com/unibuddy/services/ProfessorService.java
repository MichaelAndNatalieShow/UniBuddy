package com.unibuddy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unibuddy.repositories.ProfessorRepository;
import com.unibuddy.models.Professor;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService {

    @Autowired
    private ProfessorRepository professorRepository;

    public List<Professor> getAllProfessors() {
        return professorRepository.findAll();
    }

    public Optional<Professor> getProfessorById(Long professorId) {
        return professorRepository.findById(professorId);
    }

    public Professor saveProfessor(Professor professor) {
        return professorRepository.save(professor);
    }

    public void deleteProfessor(Long id) {
        professorRepository.deleteById(id);
    }
}
