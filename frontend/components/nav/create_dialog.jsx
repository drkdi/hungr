import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
   state = {
      open: false,
   };

   handleClickOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false });
   };

   render() {

      const style = {
         background: 'transparent',
         top: -7,
         
      };

      return (
         <div className="nav_div">
            <Button onClick={this.handleClickOpen} 
               style={style}>
               <button className="createPost"><i className="fas fa-pencil-alt"></i></button>

        </Button>
            <Dialog
               open={this.state.open}
               onClose={this.handleClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
            >
               <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
               
               <DialogActions>
                  <Button onClick={this.handleClose}>
                     Disagree
            </Button>
                  <Button onClick={this.handleClose}>
                     Agree
            </Button>
               </DialogActions>
            </Dialog>
         </div>
      );
   }
}

export default AlertDialog;