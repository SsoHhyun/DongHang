package com.team.pj.donghang.domain.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString
@Table(name="survey")

// 문항 선정 후 수정 예정
public class Survey implements Serializable {
    @Id
    @OneToOne(cascade = CascadeType.ALL)
    @MapsId
    @JoinColumn(name = "user_no")
    private User user;

    @NotNull
    @Column(name = "survey_1")
    private Long survey1;

    @NotNull
    @Column(name = "survey_2")
    private Long survey2;

    @NotNull
    @Column(name = "survey_3")
    private Long survey3;

    @NotNull
    @Column(name = "survey_4")
    private Long survey4;

    @NotNull
    @Column(name = "survey_5")
    private Long survey5;

    @NotNull
    @Column(name = "survey_6")
    private Long survey6;

    @NotNull
    @Column(name = "survey_7")
    private Long survey7;

    @NotNull
    @Column(name = "survey_8")
    private Long survey8;

}
