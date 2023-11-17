package kth.milad.repository;

import kth.milad.entity.Msg;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Msg, Integer> {}
