package com.team.pj.donghang.repository;

import com.team.pj.donghang.domain.entity.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//@Repository
public interface PhotoRepository extends JpaRepository<Photo,Long> {

}
