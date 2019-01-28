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
               <div className="createPost"><i className="fas fa-pencil-alt"></i></div>
        </Button>
        
            <Dialog
               open={this.state.open}
               onClose={this.handleClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
            >
               <DialogTitle id="alert-dialog-title">{"??????????"}</DialogTitle>
               
               <DialogActions>

                  <button onClick={this.handleClose}>
                     Disagree
                   </button>

                  <button onClick={this.handleClose}>
                     Agree
                   </button>
               </DialogActions>
            </Dialog>
         </div>
      );
   }
}

export default AlertDialog;