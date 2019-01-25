import React from 'react';
import {Link, NavLink, Route} from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';

const Dashboard = props => {



   return (

      <>
         <p>dash</p>
         <style>{'body { background: #35465C; }'}</style>
         < PostIndexContainer />  
      </>
   )

}
export default Dashboard;