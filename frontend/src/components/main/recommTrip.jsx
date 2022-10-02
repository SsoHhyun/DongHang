import React, { Component } from "react"
import Slider from "react-slick"
import { Box, styled } from "@material-ui/core"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class RecommTrip extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      pauseOnDotsHover: true,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }
    return (
      <SliderBox>
        <Slider {...settings} maxWidth="100%" overflow="hidden">
          <ImgBox>
            <Img src="img/d1.jpg" alt="" />
          </ImgBox>
          <ImgBox>
            <Img src="img/d2.jpg" alt="" />
          </ImgBox>
          <ImgBox>
            <Img src="img/d3.jpg" alt="" />
          </ImgBox>
        </Slider>
      </SliderBox>
    )
  }
}

const Img = styled("img")({
  maxWidth: "100%",
  height: "100%",
})

const ImgBox = styled(Box)({
  width: "100vw",
  height: "100vh",
})

const SliderBox = styled(Box)({
  width: "40vw",
  height: "100vh",
})

// 일반 미션 / 커스텀 미션 프론트에서 해줄지 백엔드에서 구분해줄지 차이..

// 새로고침 => 백엔드에서 가져와서 보내줌
// 커스텀을 반홚
// 이걸 개선하면 크리에이트 데이터를 보낼때
// 화면에 있는 미션 데이터 번호들을
// 크리에이터한 데이터와화면상 미션 번호드르을 보내주고
// 포스트 한 다음 기다리기
// then 해서 포스트 후 반환해서 리턴하기를
// 기다리면 ->>>>>>>>
// post then get 할수도 있음. . .. 이렇게 하면 두 단계 처리할 필요 없고 갖고온데이터를 루프 돌린다음 반환하기
