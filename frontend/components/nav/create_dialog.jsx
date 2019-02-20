import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DashLinks from '../dashboard/dashboard_nav'

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

      const style2 = {
         background: 'transparent',
         top: -7,
      }

      const style = {
         backgroundColor: 'transparent',
         background: 'transparent',
         height: 140,
         width: 500,
      };
      const style3 = {
         font: 50,
      };

      return (
         <div className="nav_div">
            <Button onClick={this.handleClickOpen}
               style={style2}>
               <div className="createPost"><i className="fas fa-utensils"></i></div>
            </Button>

            <Dialog
               open={this.state.open}
               onClose={this.handleClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
               style={{ background: 'transparent', backgroundColor: "transparent" }}
               overlayStyle={{ backgroundColor: 'transparent' }}
            >
               <DialogTitle id="alert-dialog-title"
                  style={{ background: 'transparent', backgroundColor: "transparent" }}
                  overlayStyle={{ backgroundColor: 'transparent' }}></DialogTitle>


               <DialogActions style={style}>
                  <div className="dashboard_icon_box" onClick={this.handleClose}>
                     <Link to="/dashboard/new/text" className="dmodalicon">
                        <span className="dashboard_nav_text" style={{ fontSize: 50 }}>Aa</span>
                     </Link>

                     <label className="dashboard_text_label">Text</label>
                  </div>

                  <div className="dashboard_icon_box" onClick={this.handleClose}>
                     <Link to="/dashboard/new/image" className="modal_icon">
                        <i className="fas fa-camera-retro"></i>
                     </Link>

                     <label className="dashboard_text_label">Picture</label>
                  </div>

                  <div className="dashboard_icon_box" onClick={this.handleClose}>
                     <Link to="/dashboard/new/quote" className="modal_icon">
                        <i className="fas fa-quote-left"></i>
                     </Link>
                     <label className="dashboard_text_label">Quote</label>

                  </div>

                  <div className="dashboard_icon_box" onClick={this.handleClose}>
                     <Link to="/dashboard/new/link" className="modal_icon">
                        <i className="fas fa-link"></i>
                     </Link>
                     <label className="dashboard_text_label">Link</label>
                  </div>

                  <div className="dashboard_icon_box" onClick={this.handleClose}>
                     <Link to="/dashboard/new/audio" className="modal_icon">
                        <i className="fas fa-headphones-alt"></i>
                     </Link>
                     <label className="dashboard_text_label">Audio</label>
                  </div>

                  <div className="dashboard_icon_box" onClick={this.handleClose}>
                     <Link to="/dashboard/new/video" className="modal_icon">
                        <i className="fas fa-video"></i>
                     </Link>
                     <label className="dashboard_text_label">Video</label>

                  </div>

               </DialogActions>
            </Dialog>
         </div>
      );
   }
}

export default AlertDialog;