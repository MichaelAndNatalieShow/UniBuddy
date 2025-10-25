package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.TransferPlan;
import java.util.List;
import java.util.Optional;

public interface TransferPlanRepository extends JpaRepository<TransferPlan, Long> {

    Optional<TransferPlan> findByTransferPlanId(Long id);

    List<TransferPlan> findByTransferMajor(String major);

    List<TransferPlan> findByTransferCollege(String college);

    Optional<TransferPlan> findByTransferMajorAndTransferCollege(String major, String college);
}
