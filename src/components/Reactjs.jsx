import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imagem from "../assets/react.png";

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

export default function Reactjs() {
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
            React
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            O React (também denominado React.js ou ReactJS) é uma biblioteca
            JavaScript de código aberto com foco em criar interfaces de usuário
            (frontend) em páginas web. É mantido pelo Facebook, Instagram,
            outras empresas e uma comunidade de desenvolvedores individuais. É
            utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek,
            HelloSign, Walmart e outros. Em 2015, o Facebook anunciou o módulo
            React Native, que em conjunto com o React, possibilita o
            desenvolvimento de aplicativos para Android e iOS utilizando
            componentes de interface de usuário nativos de ambas plataformas,
            sem precisar recorrer ao HTML. Na pesquisa de 2018 sobre hábitos de
            desenvolvedores do site Stack Overflow, o React foi a terceira
            biblioteca ou framework mais citado pelos usuários e desenvolvedores
            profissionais, ficando atrás somente do Node.js e Angular,
            respectivamente.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
