import React from 'react';
import ReactDOM from "react-dom";
import ReactFullpage from '@fullpage/react-fullpage';

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

class MySection extends React.Component {

   
   render() {
      return (
         <div className="section">
            <h3>{this.props.content}</h3>
         </div>
      );
   }
}



class FullPageScroll extends React.Component {
   constructor(props) {
      super(props)
   }




   render() {
      return (
         <ReactFullpage
            navigation
            controlArrows= "true"
            sectionsColor={["#00cf35", "#7c5cff", "#001935", "#001935"]}
            navigationPosition="left"
            slidesNavigation="true"
            render={({ fullpageApi }) => {
               return (
                  <div>
                     <MySection content={


                        <>
                           {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                              Click me to move down
            </button> */}

                        <p className="fullPageScrollH blinking">h</p>

                           <div className="sk-fading-circle circle-container">
                              <i className="fas fa-beer sk-circle1 sk-circle"></i>
                              <i className="fa-angle-double-right sk-circle2 sk-circle"></i>
                              <i className="fas fa-laugh-squint sk-circle3 sk-circle"></i>
                              <i className="fas fa-unlink sk-circle4 sk-circle"></i>
                              <i className="fas fa-headphones sk-circle5 sk-circle"></i>
                              <i className="fas fa-video-slash sk-circle6 sk-circle"></i>
                              <i className="fas fa-poo-storm sk-circle7 sk-circle"></i>
                              <i className="fas fa-car-crash sk-circle8 sk-circle"></i>
                              <i className="fas fa-cat sk-circle9 sk-circle"></i>
                              <i className="fas fa-chess-knight sk-circle10 sk-circle"></i>
                              <i className="fas fa-coins sk-circle11 sk-circle"></i>
                              <i className="fas fa-cookie-bite sk-circle12 sk-circle"></i>
                              
                           </div>

                        <div className="fullPageExplainWrapper">
                           <h1 className="fullPageHeader">Hungr is so easy to use that it’s hard to explain.</h1>
                           <p className="fullPageText">If you don't like Hawaiian pizza don't bother continuing</p>
                        </div>
                        </>
                     } />

 
                     <MySection content={
                        <>
                           <div className="fullPageExplainWrapper">
                              <h1 className="fullPageHeader blinking">Hungr is blogs.</h1>
                              <p className="fullPageText"> Wow you can blog and stuff! Neat!</p>
                           </div>


                           <div className="fullPagePostWrapper">
                              <img src="https://i.imgur.com/lVpAF8C.png" className="fullPageImage" />
                              <img src="https://i.imgur.com/NMmJmyI.png" className="fullPageImage" />
                              <img src="https://i.imgur.com/NKrFEid.gif" className="fullPageImage" />
                              <img src="https://i.imgur.com/IEPTWy2.png" className="fullPageImage" />
                              <img src="https://i.imgur.com/9PSm9LK.gif" className="fullPageImage" />
                           </div>

                        </>


                     } />




                     <MySection content={
                        <>
                           <img src="https://i.imgur.com/KN4Oo0e.png" className="fullPageFeedImage" />

                           <div className="fullPageImageWrapper">
                              <h1 className="fullPageHeader blinking">You already know how this works.</h1>
                              {/* <p className="fullPageText">Here's what your feed looks like</p> */}
                           </div>
                        </>


                     } />

                     
                     <MySection content={
                        <>
                        </>


                     } />
                  </div>
               );
            }}
         />
      );
   }


}

export default FullPageScroll;
