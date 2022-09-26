//코스관련 추천(하단)바 내부 컨텐츠

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import SpotDetail from "./spotdetail";
import { styled } from "@mui/material";

const RecommandContents = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledCard>
      <CardMedia
        component="img"
        image="img/d1.jpg"
        alt="green iguana"
        width="240px"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          여행지이름
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen}>자세히 보기</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SpotDetail></SpotDetail>
        </Modal>
      </CardActions>
    </StyledCard>
  );
};
export default RecommandContents;

const StyledCard = styled(Card)({
  float: "left",
  width: "240px",
  display: "inline-block",
});
