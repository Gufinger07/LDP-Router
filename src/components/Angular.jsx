import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imagem from "../assets/angular.png";

const useStyles = makeStyles({
  root: {
    maxWidth: "25rem",
    maxHeight: "50rem",
    marginTop: "1.25rem",
  },
  media: {
    height: "25rem",
  },
});

export default function Angular() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imagem}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Angular
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Angular (comumente referido como "Angular 2+" ou "Angular 2") é uma
            plataforma de aplicações web de código-fonte aberto e front-end
            baseado em TypeScript liderado pela Equipe Angular do Google e por
            uma comunidade de indivíduos e corporações. Angular é uma reescrita
            completa do AngularJS, feito pela mesma equipe que o construiu.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
