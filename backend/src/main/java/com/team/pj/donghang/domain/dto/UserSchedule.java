package com.team.pj.donghang.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSchedule {
    @JsonProperty(value = "user_no")
    Long userNo;
}
