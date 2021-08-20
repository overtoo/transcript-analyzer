import React, { useRef } from "react";

const ScrollDemo = () => {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  // run this function from an event handler or an effect to execute scroll

  return <></>;
};

export default ScrollDemo;
