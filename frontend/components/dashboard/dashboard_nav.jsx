import React from 'react';
import { Link } from 'react-router-dom';

const DashLinks = () => {
   return (
      <section className="dashboard_buttons">

         <div className="dashboard_icon_box">
            <Link to="/dashboard/new/text" className="dashboard_icon">
               <span className="dashboard_nav_text">Aa</span>
            </Link>
            
            <label className="dashboard_text_label">Text</label>
         </div>

         <div className="dashboard_icon_box">
            <Link to="/dashboard/new/image" className="dashboard_icon">
               <i className="fas fa-camera-retro"></i>
            </Link>

            <label className="dashboard_text_label">Picture</label>
         </div>

         <div className="dashboard_icon_box">
            <Link to="/dashboard/new/quote" className="dashboard_icon">
               <i className="fas fa-quote-left"></i>
            </Link>
            <label className="dashboard_text_label">Quote</label>

         </div>

         <div className="dashboard_icon_box">
            <Link to="/dashboard/new/link" className="dashboard_icon">
               <i className="fas fa-link"></i>
            </Link>
            <label className="dashboard_text_label">Link</label>
         </div>

         <div className="dashboard_icon_box">
            <Link to="/dashboard/new/audio" className="dashboard_icon">
               <i className="fas fa-headphones-alt"></i>
            </Link>
            <label className="dashboard_text_label">Audio</label>
         </div>
                     
         <div className="dashboard_icon_box">
            <Link to="/dashboard/new/video" className="dashboard_icon">
               <i className="fas fa-video"></i>
            </Link>
            <label className="dashboard_text_label">Video</label>

         </div>

      </section>
   );
};

export default DashLinks;