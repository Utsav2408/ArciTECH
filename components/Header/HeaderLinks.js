/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons

// core components

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <Link href="/">
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink}>
            Home
          </Button>
        </ListItem>
      </Link>
      <Link href="/events">
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink}>
            Events
          </Button>
        </ListItem>
      </Link>
      <Link href="/team">
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink}>
            Team
          </Button>
        </ListItem>
      </Link>
      <Link href="/project">
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink}>
            Project
          </Button>
        </ListItem>
      </Link>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          href="https://medium.com/@ArciTECHCommunity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
          </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}> */}
      <Button
        color="custom"
        href="https://docs.google.com/forms/d/e/1FAIpQLSe9W2B4-S2Stv62l5zgWTemwXpLyKC91jtOsLZZTglbEmonkg/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        JOIN US
        </Button>
      {/* </ListItem> */}
      {/* <Link href="/contact">
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink}>
            Resources
          </Button>
        </ListItem>
      </Link> */}
      {/* <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink} href="https://medium.com/@arcitech.snu">
          Blog
        </Button>
      </ListItem> */}
      {/* <ListItem className={classes.listItem}> */}
      {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
      {/* <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List >
  );
}
