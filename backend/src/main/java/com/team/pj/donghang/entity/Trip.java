package com.team.pj.donghang.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
;
import lombok.*;

import java.text.SimpleDateFormat;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString

public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="trip_no")
    private Long tripNo;

    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("YYYYMMDD");

    @Column(name = "start_date")
    private SimpleDateFormat startDate;

    @Column(name = "end_date")
    private SimpleDateFormat endDate;

    @ManyToOne
    @Column(name = "user_no")
    private User user;

    @NotNull
    @Column(name = "trip_name", length = 50)
    private String tripName;

}
