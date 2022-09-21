package com.team.pj.donghang.repository;

import com.team.pj.donghang.domain.dto.TripDto;
import com.team.pj.donghang.domain.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripRepository extends JpaRepository<Trip,Long> {
    List<TripDto> findByuser_no(Long userNo);

}
