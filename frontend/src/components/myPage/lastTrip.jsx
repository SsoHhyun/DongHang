// 지난 여행
import React, { useState, useEffect } from "react";
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
} from "@mui/material";

function ActionAreaCard(props) {
  return (
    <MyCard sx={{ maxWidth: 345 }} onClick={() => {}}>
      <CardActionArea onClick={props.setAlbumOpen()}>
        <CardImg>
          <CardMedia
            component="img"
            image="/img/imgimg.jpg"
            alt="green iguana"
            style={{
              width: "12vw",
              height: "15vh",
            }}
          />
        </CardImg>
        <CardContent>
          <CardText gutterBottom variant="h5" component="div">
            나의 여행
          </CardText>
          <CardText variant="body2" color="text.secondary">
            2022-09-06 ~ 2022-09-09
          </CardText>
        </CardContent>
      </CardActionArea>
    </MyCard>
  );
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
  );
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
  );
};

export default LastTrip;

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
});

const Title = styled(Typography)({
  fontSize: 30,
  color: "brown",
  fontWeight: "bold",
  textAlign: "center",
  margin: "2rem",
});

const Trips = styled(Box)({
  overflowY: "auto",
  marginBottom: "2rem",
  marginLeft: "4rem",
  marginRight: "4rem",
});

const MyCard = styled(Card)({
  margin: "1rem",
});

const CardImg = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  paddingTop: 10,
});

const CardText = styled(Typography)({
  textAlign: "right",
});
