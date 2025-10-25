package backend.main.java.com.unibuddy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.unibuddy.services.TransferArticulationService;
import com.unibuddy.models.TransferArticulation;

import java.util.List;

@RestController
@RequestMapping("/api/transferarticulations")
@CrossOrigin(origins = "*")
public class TransferArticulationController {

    @Autowired
    private TransferArticulationService transferArticulationService;

    @GetMapping
    public List<TransferArticulation> getAllTransferArticulations() {
        return transferArticulationService.getAllTransferArticulations();
    }

    @GetMapping("/{id}")
    public TransferArticulation getTransferArticulationById(@PathVariable Long id) {
        return transferArticulationService.getTransferArticulationById(id);
    }

    @PostMapping
    public TransferArticulation createTransferArticulation(@RequestBody TransferArticulation articulation) {
        return transferArticulationService.saveTransferArticulation(articulation);
    }

    @PutMapping("/{id}")
    public TransferArticulation updateTransferArticulation(@PathVariable Long id, @RequestBody TransferArticulation updatedArticulation) {
        TransferArticulation existing = transferArticulationService.getTransferArticulationById(id);
        if (existing == null) {
            throw new RuntimeException("TransferArticulation not found with id " + id);
        }
        updatedArticulation.setId(id);
        return transferArticulationService.saveTransferArticulation(updatedArticulation);
    }

    @DeleteMapping("/{id}")
    public void deleteTransferArticulation(@PathVariable Long id) {
        transferArticulationService.deleteTransferArticulation(id);
    }
}
