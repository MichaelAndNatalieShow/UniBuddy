package backend.main.java.com.unibuddy.repositories;

import backend.main.java.com.unibuddy.models.TransferArticulation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface TransferArticulationRepository extends JpaRepository<TransferArticulation, Long> {
    Optional<TransferArticulation> findByCommunityCollege(String communityCollege);
}
