import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imagem from "../assets/spring.png";

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

export default function Spring() {
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
            Spring
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            O Spring é um framework open source para a plataforma Java criado
            por Rod Johnson e descrito em seu livro "Expert One-on-One: JEE
            Design e Development". Trata-se de um framework não intrusivo,
            baseado nos padrões de projeto inversão de controle (IoC) e injeção
            de dependência. No Spring o container se encarrega de "instanciar"
            classes de uma aplicação Java e definir as dependências entre elas
            através de um arquivo de configuração em formato XML, inferências do
            framework, o que é chamado de auto-wiring ou ainda anotações nas
            classes, métodos e propriedades. Dessa forma o Spring permite o
            baixo acoplamento entre classes de uma aplicação orientada a
            objetos. O Spring possui uma arquitetura baseada em interfaces e
            POJOs (Plain Old Java Objects), oferecendo aos POJOs características
            como mecanismos de segurança e controle de transações. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
