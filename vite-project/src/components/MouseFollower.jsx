import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const followerRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: pos.current.x, y: pos.current.y });

  useEffect(() => {
    const follower = followerRef.current;

    const move = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const skewAmount = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.2, 20);

      gsap.set(follower, {
        x: pos.current.x,
        y: pos.current.y,
        rotation: angle,
        skewX: skewAmount,
      });

      requestAnimationFrame(move);
    };

    const mouseMoveHandler = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    move();

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 z-[9999]  w-10 h-10 rounded-full bg-white  pointer-events-none mix-blend-difference"
      style={{
        backgroundColor: "transparent",
        border: "2px solid white",
      }}
    />
  );
};

export default MouseFollower;
