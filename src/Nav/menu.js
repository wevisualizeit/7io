import React from "react";
import {
  Button,
  MenuItem,
  makeStyles,
  IconButton
} from "@material-ui/core";
import {
  usePopupState,
  bindHover,
  bindMenu
} from "material-ui-popup-state/hooks";
import Menu from "material-ui-popup-state/HoverMenu";
import MoreIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
//import useWindowWidth from "../utils/hooks/WindowWidth";
// import {
//   Link
// } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: 20,
    boxShadow: "none",
    backgroundColor: "transparent",
    borderRadius: 5,
    color: "white",
    "&:hover": {
      backgroundColor: "#d5d5d508",
      boxShadow: "none"
    }
  },
  buttonContact: {
    color: 'white',
    marginLeft: 20,
    boxShadow: "none",
    backgroundColor: "transparent",
    borderRadius: 25,
    border: "1px solid #a765e6",
    "&:hover": {
      backgroundColor: "#a765e6",
      boxShadow: "none"
    }
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  sectionDesktop: {
    width: "auto",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex"
    }
  },
  test: {}
}));

const TriggerMenu = props => {
    const classes = useStyles();
    const popupProduct = usePopupState({
        variant: "popover",
        popupId: "Products"
    });
    const popupServices = usePopupState({
        variant: "popover",
        popupId: "Services"
    });
    const popupMobile = usePopupState({ 
        variant: "popover", 
        popupId: "Mobile" 
    });

    const menuItems = [
        {
        bindMenuProps: bindMenu(popupProduct),
        pathSuffix: 'products',
        subMenu: [
            {
            id: 'dataStorage',
            label: "Data Storage",
            menuProps: {
                onClickFunction: e => popupProduct.close
            }
            },
            {
            id: 'compliances',
            label: "Compliances",
            menuProps: {
                onClickFunction: e => popupProduct.close
            }
            },
            {
            id: 'cyberSecurity',
            label: "Cyber Security",
            menuProps: {
                onClickFunction: e => popupProduct.close
            }
            }
        ]
        },
        {
        bindMenuProps: bindMenu(popupServices),
        subMenu: [
            {
            label: "Corporate Governance",
            menuProps: {
                onClickFunction: e => popupServices.close
            }
            },
            {
            label: "IT",
            menuProps: {
                onClickFunction: e => popupServices.close
            }
            },
            {
            label: "Compliances",
            menuProps: {
                onClickFunction: e => popupServices.close
            }
            },
            {
            label: "Financing",
            menuProps: {
                onClickFunction: e => popupServices.close
            }
            }
        ]
        },
        {
        bindMenuProps: bindMenu(popupMobile),
        subMenu: [
            {
            label: "Product",
            subMenu: [
                {
                bindMenuProps: bindMenu(popupProduct),
                subMenu: [
                    {
                    label: "Data Storage",
                    menuProps: {
                        onClickFunction: e => popupProduct.close
                    }
                    },
                    {
                    label: "Compliances",
                    menuProps: {
                        onClickFunction: e => popupProduct.close
                    }
                    },
                    {
                    label: "Cyber Security",
                    menuProps: {
                        onClickFunction: e => popupProduct.close
                    }
                    }
                ]
                },
            ]
            },
            {
            label: "Services",
            subMenu:[
                {
                bindMenuProps: bindMenu(popupServices),
                subMenu: [
                    {
                    label: "Corporate Governance",
                    menuProps: {
                        onClickFunction: e => popupServices.close
                    }
                    },
                    {
                    label: "IT",
                    menuProps: {
                        onClickFunction: e => popupServices.close
                    }
                    },
                    {
                    label: "Compliances",
                    menuProps: {
                        onClickFunction: e => popupServices.close
                    }
                    },
                    {
                    label: "Financing",
                    menuProps: {
                        onClickFunction: e => popupServices.close
                    }
                    }
                ]
                },
            ]
            },
            {
            label: "About"
            },
            {
            label: "Contact"
            }
        ]
        }
    ];

    const renderMenuItems = menuItems => {
        return menuItems.map((menuItem, key) => {
            return (
                <Menu
                key={key}
                {...menuItem.bindMenuProps}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                {
                    menuItem.subMenu.map((subMenuItem, keyB) => (
                        <Link smooth to={`${menuItem.pathSuffix}#${subMenuItem.id}`} key={keyB} className={classes.link}>
                            <MenuItem
                            onClick={
                                subMenuItem.hasOwnProperty("menuProps")
                                ? subMenuItem.menuProps.onClickFunction()
                                : null
                            }
                            >
                            {subMenuItem.label}
                            </MenuItem>
                        </Link>
                       
                    ))
                }
                </Menu>
            );
        });
    };

    return (
        <>
        <div className={classes.sectionDesktop}>
            <Link to="/" className={classes.link}>
                <Button className={classes.button} variant="contained">
                    Home
                </Button>
            </Link>
            <Link to="/products" className={classes.link}>
                <Button className={classes.button} 
                variant="contained"
                endIcon={<ArrowDropDownIcon />}
                {...bindHover(popupProduct)}
                >
                    Products
                </Button>
            </Link>
            <Link to="/services" className={classes.link}>
                <Button className={classes.button} 
                variant="contained"
                endIcon={<ArrowDropDownIcon />}
                {...bindHover(popupServices)}
                >
                    Services
                </Button>
            </Link>
            <Link to="/about" className={classes.link}>
                <Button className={classes.button} variant="contained">
                    About
                </Button>
            </Link>
            <Link to="/contact" className={classes.link}>
                <Button className={classes.buttonContact} variant="contained">
                    Contact Us
                </Button>
            </Link>
            {renderMenuItems(menuItems)}
        </div>

        <div className={classes.sectionMobile}>
            <IconButton
            aria-label="show more"
            //aria-controls={mobileMenuId}
            aria-haspopup="true"
            color="inherit"
            variant="contained"
            {...bindHover(popupMobile)}
            >
                <MoreIcon />
            </IconButton>
        </div>
        </>
    );
};

export default TriggerMenu;
