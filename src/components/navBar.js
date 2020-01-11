import React from 'react';
import { NavLink, Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className="nav">
        
            <Link to='/'><p className='logo'>SimCorp</p></Link>
            <nav className='nav-css'>
                <NavLink to='/solutions' activeStyle={{color:'blue'}}><p>Solutions</p></NavLink>
                <NavLink to='/services' activeStyle={{color:'blue'}}><p>Services</p></NavLink>
                <NavLink to='/whyus' activeStyle={{color:'blue'}}><p>Why SimCorp</p></NavLink>
                <NavLink to='/client-stories' activeStyle={{color:'blue'}}><p>Client Stories</p></NavLink>
                <NavLink to='/insights' activeStyle={{color:'blue'}}><p>Insights</p></NavLink>
            </nav>  
                <div className='socials'>Socials</div>
    </div>
  );
}

export default NavBar;
