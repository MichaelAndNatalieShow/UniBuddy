package backend.main.java.com.unibuddy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unibuddy.repositories.TransferArticulationRepository;
import com.unibuddy.models.TransferArticulation;

import java.util.List;
import java.util.Optional;

@Service
public class TransferArticulationService {

    @Autowired
    private TransferArticulationRepository transferArticulationRepository;

    public List<TransferArticulation> getAllTransferArticulations() {
        return transferArticulationRepository.findAll();
    }

    public Optional<TransferArticulation> getTransferArticulationById(Long id) {
        return transferArticulationRepository.findById(id);
    }

    public TransferArticulation saveTransferArticulation(TransferArticulation transferArticulation) {
        return transferArticulationRepository.save(transferArticulation);
    }

    public void deleteTransferArticulation(Long id) {
        transferArticulationRepository.deleteById(id);
    }
}
