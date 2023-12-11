import { useRef, useState } from "react";

const MouseHandlers = () => {
    
  const cardWrapperRef = useRef(null);
  const [widthToScroll, setWidthToScroll] = useState(0);
  const [currScroll, setCurrScroll] = useState(0);
  const [initPos, setInitPos] = useState(0);
  const [clicked, setClicked] = useState(false);


  const handleMouseDown = (e) => {
    if (cardWrapperRef.current) {
      cardWrapperRef.current.classList.add("grab");
      setInitPos(e.clientX - cardWrapperRef.current.getBoundingClientRect().left);
      setCurrScroll(cardWrapperRef.current.scrollLeft);
      setClicked(true);
    }
  };

  const handleMouseMove = (e) => {
    if (clicked && cardWrapperRef.current) { 
      const xPos = e.clientX - cardWrapperRef.current.getBoundingClientRect().left;
      cardWrapperRef.current.scrollLeft = currScroll + -(xPos - initPos);
    }
  };

  const handleMouseUpAndLeave = () => {
    if (cardWrapperRef.current) {
      cardWrapperRef.current.classList.remove("grab");  
      setClicked(false);
    }
  };


  return { cardWrapperRef, widthToScroll,setWidthToScroll, handleMouseDown, handleMouseMove, handleMouseUpAndLeave };
};

export default MouseHandlers;