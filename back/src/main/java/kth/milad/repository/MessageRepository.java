package kth.milad.repository;

import kth.milad.entity.Msg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Msg, Integer> {}
