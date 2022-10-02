// 지난 여행
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLastTrip } from "../../features/course/lastTripSlice"
import interceptor from "../../api/interceptor"
import {
  Box,
  Paper,
  styled,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
} from "@mui/material"

function ActionAreaCard(props) {
  return (
    <MyCard sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          props.setAlbumOpen(props.i)
        }}
      >
        <CardImg>
          <CardMedia
            component="img"
            image={props.item.thumbnail}
            alt="thumbnail"
            style={{
              width: "12vw",
              height: "15vh",
            }}
          />
        </CardImg>
        <CardContent>
          <CardText gutterBottom variant="h5" component="div">
            {props.item.tripName}
          </CardText>
          <CardText variant="body2" color="text.secondary">
            {`${props.item.startDate} ~ ${props.item.endDate}`}
          </CardText>
        </CardContent>
      </CardActionArea>
    </MyCard>
  )
}

const LastTrip = (props) => {
  const tripInfo = useSelector((state) => state.lastTrips)
  const dispatch = useDispatch()
  useEffect(() => {
    interceptor({
      url: "/api/trip/getMyLastTripList",
      method: "get",
    }).then((res) => {
      dispatch(setLastTrip(res.data))
      console.log(tripInfo)
    })
  }, [])
  return (
    <TripContainer>
      <Title>지난 여행</Title>
      <Trips>
        <Grid container spacing={0}>
          <Grid container>
            <React.Fragment>
              {tripInfo.map((item, i) => (
                <Grid item xs={4}>
                  <ActionAreaCard
                    item={item}
                    i={i}
                    setAlbumOpen={props.setAlbumOpen}
                  />
                </Grid>
              ))}
            </React.Fragment>
          </Grid>
        </Grid>
      </Trips>
    </TripContainer>
  )
}

export default LastTrip

const TripContainer = styled(Paper)({
  borderRadius: 20,
  width: "53vw",
  height: "95vh",
  backgroundColor: "beige",
  marginLeft: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
})

const Title = styled(Typography)({
  fontSize: 30,
  color: "brown",
  fontWeight: "bold",
  textAlign: "center",
  margin: "2rem",
})

const Trips = styled(Box)({
  overflowY: "auto",
  marginBottom: "2rem",
  marginLeft: "4rem",
  marginRight: "4rem",
})

const MyCard = styled(Card)({
  margin: "1rem",
})

const CardImg = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  paddingTop: 10,
})

const CardText = styled(Typography)({
  textAlign: "right",
})
