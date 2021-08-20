import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imagem from "../assets/nodejs.png";

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

export default function Nodejs() {
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
            Node-js
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Node.js é um software de código aberto, multiplataforma, baseado no
            interpretador V8 do Google e que permite a execução de códigos
            JavaScript fora de um navegador web. O runtime de JavaScript é
            constituído pelos seguintes comandos: node package manager (npm), e
            npx (node package extractor); onde o primeiro tem o propósito de
            executar código armazenado num package de nodejs, instalando o
            software globalmente ou localmente, já o segundo tem o propósito de
            instalar a nível local o código instalado globalmente. Um exemplo
            disso é o npx create-react-app que tem como propósito instalar a
            nível local um template vazio de um site de react, pronto a ser
            usado, através de uma fórmula instalada com npm.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
