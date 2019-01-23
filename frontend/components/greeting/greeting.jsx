import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
   
   
   const handleLogout = (e) => {
      e.stopPropagation();
      return logout();
   }

   const personalGreeting = () => (
      <nav>
         <h2>hi {currentUser.username}</h2>
         <button onClick={handleLogout}>Log Out</button>
      </nav>
   );

   const sessionLinks = () => (
      <div className="greetingLinks">
         <Link to="/login">Login</Link>
         <div></div>
         <Link to="/signup">Sign Up</Link>
      </div>
   );

   return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;