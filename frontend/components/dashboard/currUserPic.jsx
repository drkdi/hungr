import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';


const msp = ({ entities, session}, ownProps) => {
   // debugger
   return {session,entities};
};

const mdp = dispatch => {
   return {
      fetchUser: userId => dispatch(fetchUser(userId))
   }
};


class currUserPic extends React.Component {
   constructor(props) {
      super(props);
      // debugger
   }
   componentDidMount() {
      // this.props.fetchUser(this.props.session.id)
      // debugger
   }

   render() {
      let prof_pic;
      console.log(this.props)
      // debugger
      if (this.props.entities.users[this.props.session.id].profile_pic_url) {
         prof_pic = this.props.entities.users[this.props.session.id].profile_pic_url;
      }
      else {
         prof_pic = "https://skinnyms.com/wp-content/uploads/2012/09/Slow-Cooker-Cheesy-Spaghetti-with-Homemade-Sausage-Recipe5-750x498.jpg";
      }

      
  
      return (
         <>
            <div >
               
               <img className="profile_pic" src={prof_pic} alt=""/>
            </div>
         </>
      )
   }

}

export default connect(msp, mdp)(currUserPic);
