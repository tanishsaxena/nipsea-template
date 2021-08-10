import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@material-ui/core";
import Icon from "../static/images/logo.ico";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import BellIcon from "react-bell-icon";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Model } from "./model";
import {useStyles} from "./styles/drawerStyle"
import Lobby from "../static/video/lobby.mp4"

const DrawerMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleOpen = () => {
    setModelOpen(true);
  };

  const handleClose = () => {
    setModelOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <div style={{ display: "flex" }}>
          <IconButton style={{ color: "#b3d4d2" }} onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <div
            style={{
              marginLeft: "auto",
              justifyContent: "flex-end",
              width: "13%",
            }}
          >
            <Toolbar
              style={{ justifyContent: "space-around", display: "flex" }}
            >
              <BellIcon
                width="20"
                active={true}
                animate={true}
                color="#b3d4d2"
              />
              <FullscreenIcon style={{ color: "#b3d4d2" }} />
              <AccountCircleIcon />
            </Toolbar>
          </div>
        </div>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <img src={Icon} alt="logo" />
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={handleOpen}
            key="agenda"
            style={{ color: "#b3d4d2" }}
          >
            <ListItemIcon style={{ color: "#b3d4d2" }}>
              <InsertDriveFileIcon />
            </ListItemIcon>
            <ListItemText primary="Agenda" />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <video id="vid-2"  loop autoPlay muted style={{ maxWidth: "100%" }}>
          <source
            src={Lobby}
            type="video/mp4"
          />
        </video>
        <Model modelOpen={modelOpen} handleClose={handleClose} />
      </main>
    </div>
  );
};

export default DrawerMenu;
