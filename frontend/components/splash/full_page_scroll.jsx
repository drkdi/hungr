import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { generateKeyPair } from 'crypto';
import { relative } from 'path';

class FullPageScroll extends React.Component {
   constructor(props) {
      super(props)
   }


   render() {


      let options = {
         activeClass: 'active',
         sectionClassName: 'section',
         anchors: ['#/', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix'],
         scrollBar: false,
         className: 'SectionContainer', // the class name for the section container
         navigation: false,
         delay: 1000, // the scroll animation speed
         verticalAlign: false,
         sectionPaddingTop: '0', // the section top padding
         sectionPaddingBottom: '0', // the section bottom padding
         arrowNavigation: true

      };

      return (

         <>

               <SectionsContainer className="container" {...options}>
               <Section color="#00cf35">
                     <p className="fullPageScrollH blinking">h</p>

                  <div className='circle-container spin'>
                     <i className="fas fa-camera pageScrollIcon deg0"></i>
                     <i className="fas fa-quote-right pageScrollIcon  deg45"></i>
                     <i className="fas fa-laugh-squint pageScrollIcon deg90"></i>
                     <i className="fas fa-unlink pageScrollIcon  deg135"></i>
                     <i className="fas fa-headphones pageScrollIcon  deg180"></i>
                     <i className="fas fa-video-slash pageScrollIcon  deg225"></i>
                     <i className="fas fa-poo-storm pageScrollIcon  deg270"></i>
                     <i className="fas fa-font pageScrollIcon  deg315"></i>
                  </div>

                  <button className="backtoTop1"><a href="http://www.hungr.club/#/"><i class="fas fa-angle-double-up"></i></a></button>

                  <div className="fullPageExplainWrapper">
                     <h1 className="fullPageHeader">Hungr is so easy to use that it’s hard to explain.</h1>
                  <p className="fullPageText">If you don't like Hawaiian pizza don't bother continuing</p>
                  </div>

               </Section>


               <Section className="custom-section" verticalAlign="true" color="#7c5cff">
                     
                  <button className="backtoTop2"><a href="http://www.hungr.club/#/"><i class="fas fa-angle-double-up"></i></a></button>

                  <div className="fullPageExplainWrapper">
                     <h1 className="fullPageHeader blinking">Hungr is blogs.</h1>
                     <p className="fullPageText"> Wow you can blog and stuff! Neat!</p>
                  </div>

                  <div class="fullPagePostWrapper">
                            <img src="https://i.imgur.com/lVpAF8C.png" className="fullPageImage"/>
                     <img src="https://i.imgur.com/NMmJmyI.png" className="fullPageImage"/>
                     <img src="https://i.imgur.com/NKrFEid.gif" className="fullPageImage"/>
                     <img src="https://i.imgur.com/IEPTWy2.png" className="fullPageImage"/>
                     <img src="https://i.imgur.com/9PSm9LK.gif" className="fullPageImage"/>
                        </div>

               </Section>











               <Section color="#001935">
                  <button className="backtoTop3"><a href="http://www.hungr.club/#/"><i class="fas fa-angle-double-up"></i></a></button>

                  <img src="https://i.imgur.com/KN4Oo0e.png" className="fullPageFeedImage"/>
                  
                  <div className="fullPageImageWrapper">
                     <h1 className="fullPageHeader blinking">You already know how this works.</h1>
                     {/* <p className="fullPageText">Here's what your feed looks like</p> */}
                  </div>
               
               </Section>

                  {/* <Section color="orange">Seriously, put anything you want here.
   Seven post types to get you started. Your brain can do the rest. This thing is yours. Use it however you like.
               </Section> */}


                  <Section color="yellow">
                  </Section>

               </SectionsContainer>





         </>
      )
   }


}

export default FullPageScroll;

