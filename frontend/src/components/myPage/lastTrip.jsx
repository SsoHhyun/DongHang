// 지난 여행
import React from "react"
import {
  Box,
  styled,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
} from "@mui/material"

function ActionAreaCard() {
  return (
    <MyCard sx={{ maxWidth: 345 }} onClick={() => {}}>
      <CardActionArea>
        <CardMedia component="img" image="/img/imgimg.jpg" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            제주도
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2022-09-06 ~ 2022-09-09
          </Typography>
        </CardContent>
      </CardActionArea>
    </MyCard>
  )
}

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <ActionAreaCard />
      </Grid>
      <Grid item xs={4}>
        <ActionAreaCard />
      </Grid>
      <Grid item xs={4}>
        <ActionAreaCard />
      </Grid>
    </React.Fragment>
  )
}

const LastTrip = () => {
  return (
    <TripContainer>
      <Title>지난 여행</Title>
      <Trips>
        <Grid container spacing={0}>
          <Grid container>
            <FormRow />
          </Grid>
          <Grid container>
            <FormRow />
          </Grid>
          <Grid container>
            <FormRow />
          </Grid>
        </Grid>
      </Trips>
    </TripContainer>
  )
}

export default LastTrip

const TripContainer = styled(Box)({
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
  marginBottom: "2rem",
})

const Trips = styled(Box)({})

const MyCard = styled(Card)({
  margin: "1rem",
})
