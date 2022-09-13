import React from "react";
import { useEffect, useRef } from "react";

export default function useHover() {
  //mouse over and out

  const [hover, setHover] = React.useState(false);

  const nodeRef = useRef(null);

  const handleMouseOver = () => {
    setHover(true);
    console.log("mouse over");
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const dom = nodeRef.current;

  useEffect(() => {
    if (nodeRef.current) {
      //nếu có nodeRef thì addEvenetListener
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOver);
    }
    return () => {
      //nếu có nodeRef thì removeEventListener
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, [dom]);
  return { nodeRef, hover };
}
