import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imagem from "../assets/home.png";

const useStyles = makeStyles({
  root: {
    maxWidth: "50rem",
    maxHeight: "50rem",
    marginTop: "2rem",
  },
  media: {
    height: "33rem",
    width: "50rem"
  },
  tipo: {
    marginLeft: "7rem",
    color: "#7995e4"
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.flex}>
        <CardMedia
          className={classes.media}
          image={imagem}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.tipo}>
            Conheça Alguns Frameworks Front-End e Back-End
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
