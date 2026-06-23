package T_velarde_alexis_backend.repository;

import T_velarde_alexis_backend.entity.Lead;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeadRepository extends JpaRepository<Lead, Long> {
}