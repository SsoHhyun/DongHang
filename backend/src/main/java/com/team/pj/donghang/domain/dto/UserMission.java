package com.team.pj.donghang.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 유저가 수행한 미션들 목록
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserMission {
    @JsonProperty(value = "user_no")
    Long userNo;
}
