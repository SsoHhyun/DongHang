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
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "photo_no")
    private long photoNo;

    @NotNull
    @Column(name = "photo_path")
    private String photoPath;

    @ManyToOne
    @Column(name = "trip_no")
    private Trip trip;
}
