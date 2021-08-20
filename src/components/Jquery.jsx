import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imagem from "../assets/jQuery.png";

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

export default function Jquery() {
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
            Jquery
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            jQuery é uma biblioteca de código JavaScript que contém recursos de
            uso comum para a realização de várias tarefas no browser local,
            liberando o programador de ter que implementá-las e padronizar seu
            uso. Trata-se de uma das bibliotecas JavaScript mais populares
            (senão a mais), facilitando um grande número de tarefas, como a
            criação de aplicativos AJAX, seleção de documentos DOM, criação de
            animações, gestão de eventos, entre outros. O resultado disso é que
            podemos criar páginas que apresentam interatividade na parte do
            cliente, no navegador. Muitos desenvolvedores criaram plugins que
            utilizam esta biblioteca para abordar problemas mais específicos.
            Por exemplo, mesmo que possamos desenvolver uma galeria de fotos
            baseada na jQuery, certamente poderemos encontrar vários plugins
            para resolver esse assunto, tanto pagos como gratuitos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

