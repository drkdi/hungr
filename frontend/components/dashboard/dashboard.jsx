import React, { Component } from 'react';
import {Switch, Link, NavLink, Route} from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';
import DashboardNav from './dashboard_nav';
import TextForm from '../posts/forms/text_form_container';
import EditText from '../posts/forms/edit_text';

const Dashboard = props => { 


      
   return (
      <div className="dashboard_general">


      {/* <Route path='/dashboard/new/text' component={TextForm} />*/}
  
         <Switch>

            <Route exact path='/dashboard/' component={DashboardNav} />
            <Route exact path='/dashboard/new/text' component={TextForm} />
            {/* <Route exact pathg='/dashboard/edit' component={EditText} props={props} /> */}
            {/* <Route path='/dashboard/new/quote' component={TextForm} />
            <Route path='/dashboard/new/link' component={TextForm} />
            <Route path='/dashboard/new' component={MediaForm} /> */}
         </Switch>








         <style>{'body { background: #35465C; }'}</style>
         < PostIndexContainer />  


         



      </div>
   )

}
export default Dashboard;