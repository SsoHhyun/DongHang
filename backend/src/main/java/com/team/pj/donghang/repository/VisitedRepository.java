package com.team.pj.donghang.repository;

import com.team.pj.donghang.domain.entity.Visited;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VisitedRepository extends JpaRepository<Visited, Long> {
    List<Visited> findAllByUser_UserNo(Long userNo);

    void deleteByUser_UserNo(Long userNo);
}
