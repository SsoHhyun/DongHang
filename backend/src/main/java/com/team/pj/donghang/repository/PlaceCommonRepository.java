package com.team.pj.donghang.repository;

import com.team.pj.donghang.domain.entity.PlaceCommon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceCommonRepository extends JpaRepository<PlaceCommon,Long> {
    PlaceCommon findByCommonNo(Long commonNo);
}
