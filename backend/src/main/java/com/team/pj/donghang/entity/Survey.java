package com.team.pj.donghang.entity;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString

// 문항 선정 후 수정 예정
public class Survey {
    @Id
    @OneToOne(cascade = CascadeType.ALL)
    @MapsId
    @JoinColumn(name = "user_no")
    private User user;

}
