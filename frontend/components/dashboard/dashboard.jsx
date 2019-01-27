import React, { Component } from 'react';
import {Link, NavLink, Route} from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';
import DashboardForm from './dashboard_form';
import CreatePost from './create_post';


const Dashboard = props => { 

   return (
      <div className="dashboard_posts">
         < DashboardForm />


         < CreatePost />
{/*     
         <Route exact path='/dashboard' component={DashLinks} />
         <Switch>
            <Route path='/dashboard/new/text' component={TextForm} />
            <Route path='/dashboard/new/quote' component={TextForm} />
            <Route path='/dashboard/new/link' component={TextForm} />
            <Route path='/dashboard/new' component={MediaForm} />
         </Switch> */}








         <p>dash</p>
         <style>{'body { background: #35465C; }'}</style>
         < PostIndexContainer />  


         



      </div>
   )

}
export default Dashboard;