package com.team.pj.donghang.domain.dto;

// 유저의 특정 지역 방문 횟수 목록
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserVisited {
    @JsonProperty(value = "user_no")
    Long userNo;
}
