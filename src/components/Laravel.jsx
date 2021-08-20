import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imagem from "../assets/laravel.png";

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

export default function Laravel() {
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
            Laravel
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Laravel é um framework PHP livre e open-source criado por Taylor B.
            Otwell para o desenvolvimento de sistemas web que utilizam o padrão
            MVC (model, view, controller). Algumas características proeminentes
            do Laravel são sua sintaxe simples e concisa, um sistema modular com
            gerenciador de dependências dedicado, várias formas de acesso a
            banco de dados relacionais e vários utilitários indispensáveis no
            auxílio ao desenvolvimento e manutenção de sistemas. De acordo com
            uma pesquisa feita em Março de 2015 com desenvolvedores, o Laravel
            foi listado como o framework PHP mais popular de 2015, seguido pelo
            Symfony2, Nette, CodeIgniter, Yii2 e outros. Em Agosto de 2015, o
            Laravel já era o principal framework de projetos PHP no GitHub.
            Laravel foi desenvolvido sob o MIT License, tendo seu código-fonte
            hospedado no GitHub. Atualmente encontra-se na versão 8.0.0.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
