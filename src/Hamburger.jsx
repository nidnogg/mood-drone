import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

/* WARNING this component was jokingly named by a friend */

const Hamburger = props => {
  const { isMenuOpen, setMenuOpen } = props;
  const tl = useRef(0);
  const burger_2 = useRef(0);
  const burger_3 = useRef(0);

  useEffect(() => {
    if(!tl.current) {
      tl.current = gsap.timeline({defaults: {duration: 0.3777, ease:"expo"} })
                       .to(burger_2.current, {rotation: 45, y: 6 }, "0.2")
                       .to(burger_3.current, {rotation: -45, y: -6 }, ">-0.3115");
      tl.current.paused(true);
    } else {
      isMenuOpen ? tl.current.play() : tl.current.reverse();
    }
    
  }, []); // crap requirement for using hooks with timelines

  const handleClick = () => {
    if(isMenuOpen()) {
      tl.current.reverse();
      setMenuOpen(0);
    } else {
      tl.current.play();
      setMenuOpen(1);
    }
  }

  return (
    <div className="bread">
      <div className="ham" onClick={handleClick}>
        <div ref={burger_2} className="burger_2"></div>
        <div ref={burger_3} className="burger_3"></div>
      </div>
    </div>
  );
}

export default Hamburger;