import React from 'react';
import { NavLink, Link } from 'react-router-dom'


function Content() {
  return (
    <div className="content">
        <div className='left-text'>
            <h3>The world's leading provider <br/>
            of integrated investment <br />
            management solutions
            </h3>
            <p>
            <br />
            <br />
            <br />
            We provide the only true integrated front-to-back
            investment management system. SimCorp Dimension gives you a
            real-time overview of your entire business in one system,
            enabling you to make better investment decisions.
            </p>
            <p className='read-more'><br />
            Read more
            </p>
        </div>
        <div className='numbers'>
        <h1>190+</h1>
        <p>Clients worldwide</p>

        <h1>16k</h1>
        <p>Daily SimCorp dimension user</p>

        <h1>45+</h1>
        <p>Years of development</p>

        <h1>20%</h1>
        <p>Revenue invested in R&D</p>
        </div>
        <img className='content-image' src='https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'/>
    </div>
  );
}

export default Content;