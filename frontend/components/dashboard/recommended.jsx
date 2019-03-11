import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';


const msp = ({ entities}) => {
   return {entities};
};

const mdp = dispatch => {
   return {
      fetchUser: userId => dispatch(fetchUser(userId))
   }
};


class Recommended extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
      
      this.props.fetchUser(0);
      this.props.fetchUser(1);
      this.props.fetchUser(2);
      this.props.fetchUser(3);
      this.props.fetchUser(4);

   }

   render() {  

      let users;
      let conditionalRendering;
      let radarPost;

      if (this.props.entities.users) {
         if (Object.values(this.props.entities.users).length > 3) {
         users = (Object.values(this.props.entities.users).map(user => {
            return user;
         }));
         // .sort((a, b) => 0.5 - Math.random())
         //  console.log(users)
         conditionalRendering = (
                     <>
                <span className="recommended_person">
                  <p className="align-right recommended_username">{users[0].username}</p>
                  <img className="recommended_users_user_pic align-left" src={users[0].profile_pic_url} alt="" />
                  <p className=" recommended_catchphrase">mayonnaise is gross</p>
                </span>

               <hr />

                <span className="recommended_person">
                  <p className="align-right recommended_username">{users[1].username}</p>
                   <img className="recommended_users_user_pic align-left" src={users[1].profile_pic_url} alt="" />
                  <p className="recommended_catchphrase">is hawaiian pizza pizza</p>
                </span>

               <hr />


                <span className="recommended_person">
                  <p className="align-right recommended_username">{users[2].username}</p>
                   <img className="recommended_users_user_pic align-left" src={users[2].profile_pic_url} alt="" />
                  <p className=" recommended_catchphrase">does dominos belong in nyc</p>
                </span>
               <hr />


                <span className="recommended_person">
                  <p className="align-right recommended_username">{users[3].username}</p>
                   <img className="recommended_users_user_pic align-left" src={users[3].profile_pic_url} alt="" />
                  <p className=" recommended_catchphrase">i tried my best man</p>

                </span>
             </>
          )
      }
   }
      else {
         conditionalRendering = (<> </>)
      }

      if (users) {
         radarPost = (
            <>
            <p className="align-right recommended_username">kramer</p>
               <img className="recommended_users_user_pic align-left" src="https://i.ytimg.com/vi/WFMWGtqdGHI/maxresdefault.jpg" alt="" />
            <p className=" recommended_catchphrase">these pretzels are making me thirsty</p>
            <br/>
            <img className="radar_image" src="https://www.tasteofhome.com/wp-content/uploads/2017/10/Sweet-Chipotle-Pretzels_exps127818_TH1999636C03_28_6bC_RMS-2-696x696.jpg" alt="" />
            </>
            )
      }
      else {
         radarPost = <></>
      }
      // WORKS BUT NEEDS ANOTHER QUERY AND GET MEDIA
   // if (this.props.entities.posts) {
   //    radarPost = (Object.values(this.props.entities.posts)[0])
   // }
   // else {
   //    radarPost = <></>
   // }



      
      // let cards = this.props.posts.map(card => {
      //    // return <Card key={post.id} post={post} />
      //    return < Card key={card.id} card={card} className="post" />

      // debugger
      return (
         <>
         <div className="right_of_posts_index">
            <div className="recommended_users">
               <p className="recommended_blogs">Recommended Blogs</p>
               <hr />

             {conditionalRendering}
        

        <br/>
        <br/>
        <br/>
        

               <p className="recommended_blogs">Radar</p>
               <hr/>
              {radarPost}           
                         
            </div>
            </div>
         </>
      )
   }






}
export default connect(msp, mdp)(Recommended);
