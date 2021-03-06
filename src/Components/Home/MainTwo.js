import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  outer: {
    backgroundColor: "#F2F2F7",
    paddingTop: 50,
    paddingBottom: 50,
    height: "auto",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
    }
  },
  container: {
    //margin: "100px auto"
  },
  card: {
    boxShadow: "none",
    height: "100%",
    borderRadius: 10,
    textAlign: "center",
    paddingBottom: 20,
    "&:hover": {
      backgroundColor: "#FEFDFF"
    }
  },
  media: {
    height: 140
  },
  cardMedia: {
    objectFit: "none"
  },
  title: {
    margin: "50px auto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48",
    [theme.breakpoints.down("xs")]: {
      fontSize: 'calc(0.5em + 10vw)',
    },
  },
  button: {
    color: "white",
    display: "inherit",
    borderRadius: "50px",
    backgroundColor: "#A765E6",
    width: "15em",
    height: "3em",
    margin: "50px auto",
    "&:hover": {
      backgroundColor: "#331D48",
      border: "2px solid white"
    }
  }
}));

const MainTwo = () => {
  const classes = useStyles();

  const cardItems = [
    {
      img: require("../../img/transparent-WWF.svg"),
      title: "Transparency",
      content:
        "When we offer our services and solutions, as well as the services from our service providers, we do this in a transparent manner and we apply the same fee structure as our service providers."
    },
    {
      img: require("../../img/longterm-WWF.svg"),
      title: "Long-term relationships",
      content:
        "We believe in forming valuable long-term relationships in which we establish growth and continue to improve and innovate together."
    },
    {
      img: require("../../img/solutions-WWF.svg"),
      title: "Turnkey solutions",
      content:
        "We are defined as a solution driven company rather than a reselling company. By combining innovative products with a high level of expertise, we are able to offer state-of-the-art solutions that are custom made and easy to implement."
    }
  ];

  const renderCardItems = cardItems => {
    return cardItems.map((cardItem, key) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={key}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                height="140"
                image={cardItem.img}
                alt={cardItem.title}
                title={cardItem.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {cardItem.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {cardItem.content}
                </Typography>
              </CardContent>
            </Card>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.outer}>
      <Container className={classes.container}>
        <Typography
          gutterBottom
          className={classes.title}
          variant="h2"
          component="h1"
        >
          What we stand for
        </Typography>
        <Grid container spacing={1}>
          {renderCardItems(cardItems)}
        </Grid>
      </Container>
    </div>
  );
};

export default MainTwo;
