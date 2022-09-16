package com.team.pj.donghang.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
;
import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString
@Table(name="photo")

public class Photo implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "photo_no")
    private long photoNo;

    @NotNull
    @Column(name = "photo_path")
    private String photoPath;

    @ManyToOne
    @JoinColumn(name = "trip_no")
    private Trip trip;
}
