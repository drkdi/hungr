import React, { Component } from 'react';
import {Switch, Link, NavLink, Route} from 'react-router-dom';
import PostIndexContainer from '../posts/post_index_container';
import DashboardNav from './dashboard_nav';
import TextForm from '../posts/forms/text_form';
import QuoteForm from '../posts/forms/quote_form';
import MediaForm from '../posts/forms/media_form';
import LinkForm from '../posts/forms/link_form';
import EditText from '../posts/forms/edit_text';
import ProfileIndexContainer from '../posts/profile';
import CurrUserPic from './currUserPic';
import Recommended from './recommended';

const Dashboard = props => { 
      
      let indexType = ( < PostIndexContainer /> )

   return (
      <div className="DASHBOARD_AND_RECOMMEND">
      <div className="dashboard_general">
      < CurrUserPic />

         <Switch>
            <Route exact path='/dashboard/' component={DashboardNav} />
            <Route exact path='/dashboard/new/text' component={TextForm} />
            <Route exact path='/dashboard/new/image' component={MediaForm} />
            <Route exact path='/dashboard/new/video' component={MediaForm} />
            <Route exact path='/dashboard/new/audio' component={MediaForm} />
            <Route exact path='/dashboard/new/quote' component={QuoteForm} />
            <Route exact path='/dashboard/new/link' component={LinkForm} />
            {/* <Route exact path='/dashboard/edit' component={EditText} props={props} /> */}
            <Route path='/' />
         </Switch>

         <style>{'body { background: #001935; }'}</style>
         {indexType}


         {/* recommended */}
         {/* radar */}

      </div>

      < Recommended className="right_of_posts_index" />
      </div>
   )

}
export default Dashboard;