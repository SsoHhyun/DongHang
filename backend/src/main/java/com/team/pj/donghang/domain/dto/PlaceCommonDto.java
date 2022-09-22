package com.team.pj.donghang.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.Column;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public abstract class PlaceCommonDto {
    @JsonProperty(value="common_no")
    private Long commonNo;

    @JsonProperty(value="content_id")
    private String contentId;

    @JsonProperty(value="content_type_id")
    private String contentTypeId;

    private String tel;

    private String title;

    @JsonProperty(value="first_image1")
    private String firstImage1;

    @JsonProperty(value="first_image2")
    private String firstImage2;

    private String cat1;
    private String cat2;
    private String cat3;
    private String addr1;
    private String addr2;
    private String mapx;
    private String mapy;
    private String mlevel;

    @JsonProperty(value = "area_code")
    private String areacode;

}
