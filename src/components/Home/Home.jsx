import { useEffect, useRef } from "react";
import { init } from 'ityped'

import './Home.scss'

const Home = () => {
  const textRef = useRef();
  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ['Web Developer', 'Gorilla', 'MERN Developer']
    })

  }, [])

  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mynft.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There! I'm</h2>
          <h1>Gurgen</h1>
          <h3>Junior <span ref={textRef}> </span></h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
