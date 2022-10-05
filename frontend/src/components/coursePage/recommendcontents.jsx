//코스관련 추천(하단)바 내부 컨텐츠

import React from "react"
import {
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
  CardActionArea,
} from "@mui/material"

const RecommendContents = (props) => {
  return (
    <StyledCard
      onClick={() => {
        props.addCourseList(props.spot)
        props.setSelectedSpot({
          title: props.spot.title,
          mapx: props.spot.mapx,
          mapy: props.spot.mapy,
        })
      }}
    >
      <CardActionArea>
        {props.spot.firstImage1 === "" ? (
          <CardMedia
            component="img"
            image="../img/kyeongju.jpg"
            alt="image not found"
            height="100px"
          />
        ) : (
          <CardMedia
            component="img"
            image={props.spot.firstImage1}
            alt="image not found"
            height="100"
          />
        )}
        <CardContent>
          <Typography
            component="div"
            style={{
              textOverflow: "ellipsis",
              width: "190px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              fontSize: 14,
              borderRadius: 10,
              fontFamily: "HallymGothic-Regular",
            }}
          >
            {props.spot.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}
export default RecommendContents

const StyledCard = styled(Card)({
  width: "200px",
  marginRight: "1rem",
  flex: "0 0 auto",
  height: "172px",
  fontSize: 16,
  fontWeight: "bold",
  borderRadius: 10,
  fontFamily: "HallymGothic-Regular",
})
