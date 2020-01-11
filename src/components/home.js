import React from 'react';
import NavBar from './navBar';
import { a, useSpring, config } from 'react-spring'


function Home() {

    const fadeIn = useSpring({
        config: {
            mass: 1,
            tension: 50,
            friction: 40,
        },
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })

    const [, setY] = useSpring(() => ({ y: 660 }))
    

  return (
    <div className="home">
    <NavBar />
    <a.h3 className='main-text'>Simplify, automate, grow, <br />
    adapt front-to-back solutions for <br/>
    the investment management industry
    </a.h3>
    <div onClick={() => {
        setY({
          y: 660,
          reset: true,
          from: { y: window.scrollY },
          onFrame: props => window.scroll(0, props.y)
        })
      }}><img className='down-arrow' src='https://i.imgur.com/VwuxPuF.png' width='64px'/></div>
    </div>
  );
}

export default Home;
