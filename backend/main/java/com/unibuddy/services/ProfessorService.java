package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.ProfessorRepository;
import com.unibuddy.models.Professor;

import java.util.List;

@Service
public class ProfessorService{

    @Autowired
    private ProfessorRepository professorRepository;

    public List<Professor> getAllProfessors(){
        return professorRepository.findAll();
    }

    public TransferPlan getProfessorById(Long professorId){
        return professorRepository.findById(professorId).orElse(null);
    }

    public Professor saveProfessor(Professor professor){
        return professorRepository.save(professor);
    }

    public void deleteProfessor(Long Id){
        return professorRepository.deleteById(id);
    }
}