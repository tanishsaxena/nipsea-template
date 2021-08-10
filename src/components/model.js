import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { styles } from "./styles/modelStyle";

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" style={{ color: "white" }}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          style={{color:"white"}}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    height: "500px",
    backgroundColor: "#031E33",
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export const Model = (props) => {
  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.modelOpen}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          Agenda
        </DialogTitle>
        <div
          style={{ backgroundColor: "white", width: "100%", height: "2px" }}
        />
        <DialogContent dividers>
          <iframe
            src="https://firebasestorage.googleapis.com/v0/b/tieyoung-e964a.appspot.com/o/nipsea%2FAward%20Ceremony%20Agenda.pdf?alt=media"
            style={{ width: "100%", height: "100%" }}
            frameborder="0"
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};
