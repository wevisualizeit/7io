import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Container,
  Link
} from "@material-ui/core";
import TriggerMenu from "./menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolBar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between"
  },
  appBar: {
    backgroundColor: "#331d48"
  },
  menu: {
    display: "flex",
    justifyContent: "rows"
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

function HideOnScroll(props) {
const { children } = props;
const trigger = useScrollTrigger();

return (
    <Slide appear={false} direction="down" in={!trigger}>
        {children}
    </Slide>
);
}

const Nav = props => {
    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar className={classes.appBar}>
                <Container>
                    <Toolbar className={classes.toolBar}>
                    <Link className={classes.link} href="#">
                        <Typography variant="h3">7io</Typography>
                    </Link>
                    <div className={classes.menu}>
                        <TriggerMenu />
                    </div>
                    </Toolbar>
                </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </div>
    );
};

export default Nav;
