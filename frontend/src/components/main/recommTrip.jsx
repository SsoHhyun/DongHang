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
