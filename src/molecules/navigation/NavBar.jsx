import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const NavBar = () => {
  const [show, setShow] = useState();

  const navRef = useRef();

  const btnRef1 = useRef();
  const btnRef2 = useRef();
  const btnRef3 = useRef();

  useLayoutEffect(() => {
    const slideDownAnimation = gsap.fromTo(
      navRef.current,
      { y: -100 },
      { y: 0, duration: 0.5, delay: 0.25, ease: "elastic.out(1, 0.3)" }
    );
    const buttonFadeStaggerAnimation = gsap.fromTo(
      [btnRef1.current, btnRef2.current, btnRef3.current],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.75,
        stagger: 0.1
      }
    );
    return () => {
      slideDownAnimation.kill();
      buttonFadeStaggerAnimation.kill();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed bg-white w-full h-12 flex content-center items-center align-center"
    >
      <ul className="relative w-full flex flex-row justify-around">
        <li ref={btnRef1}>Button 1</li>
        <li ref={btnRef2}>Button 2</li>
        <li ref={btnRef3}>Button 3</li>
      </ul>
    </nav>
  );
};

export default NavBar;
