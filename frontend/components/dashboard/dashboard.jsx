import React, { Component } from 'react';
import {Switch, Link, NavLink, Route} from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';
import DashboardNav from './dashboard_nav';
import TextForm from '../posts/forms/text_form_container';
import QuoteForm from '../posts/forms/quote_form';
import MediaForm from '../posts/forms/media_form';
import LinkForm from '../posts/forms/link_form';
import EditText from '../posts/forms/edit_text';

const Dashboard = props => { 

   // debugger
      
   return (

      <div className="dashboard_general">


      {/* if want to edit text, need to pass in post information */}
      
      {/* <Route path='/dashboard/new/text' component={TextForm} />*/}
  
         <Switch>

            <Route exact path='/dashboard/' component={DashboardNav} />
            <Route exact path='/dashboard/new/text' component={TextForm} />
            <Route exact path='/dashboard/new/image' component={MediaForm} />
            <Route exact path='/dashboard/new/video' component={MediaForm} />
            <Route exact path='/dashboard/new/audio' component={MediaForm} />
            <Route exact path='/dashboard/new/quote' component={QuoteForm} />
            <Route exact path='/dashboard/new/link' component={LinkForm} />
            <Route path='/' />
            {/* <Route exact path='/dashboard/edit' component={EditText} props={props} /> */}
            {/* <Route path='/dashboard/new/quote' component={TextForm} />
            <Route path='/dashboard/new' component={MediaForm} /> */}
         </Switch>








         <style>{'body { background: #35465C; }'}</style>
         < PostIndexContainer />  


         



      </div>
   )

}
export default Dashboard;