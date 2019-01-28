import React from 'react';
import { Link } from 'react-router-dom';

const DashLinks = () => {
   return (
      <section className="dashboard_buttons">
         <div className="icon-wrapper">
            <Link to="/dashboard/new/text" className="text pop-up">Aa</Link>
            <span className="sm-gray-text">Text</span>
         </div>

         <div className="vert-line"></div>
         <div className="icon-wrapper">
            <Link to="/dashboard/new/photo" className="photo pop-up">
               <i className="fas fa-camera-retro"></i>
            </Link>
            <span className="sm-gray-text">Photo</span>
         </div>

         <div className="vert-line"></div>
         <div className="icon-wrapper">
            <Link to="/dashboard/new/quote" className="quote pop-up">
               <i className="fas fa-quote-left"></i>
            </Link>
            <span className="sm-gray-text">Quote</span>
         </div>

         <div className="vert-line"></div>
         <div className="icon-wrapper">
            <Link to="/dashboard/new/link" className="link pop-up">
               <div className="circle"><i className="fas fa-link"></i></div>
            </Link>
            <span className="sm-gray-text">Link</span>
         </div>

         <div className="vert-line"></div>
         <div className="icon-wrapper">
            <Link to="/dashboard/new/audio" className="audio pop-up">
               <i className="fas fa-headphones-alt"></i>
            </Link>
            <span className="sm-gray-text">Audio</span>
         </div>

         <div className="vert-line"></div>
         <div className="icon-wrapper">
            <Link to="/dashboard/new/video" className="video pop-up">
               <i className="fas fa-video"></i>
            </Link>
            <span className="sm-gray-text">Video</span>
         </div>
      </section>
   );
};

export default DashLinks;