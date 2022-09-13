import React, { useEffect, useRef } from "react";

const DropDown = () => {
  //sử dụng satte
  const [showDropDown, setShowDropDown] = React.useState(false);

  const dropDownRef = useRef(null);
  //add sự kiện vào document sử dụng useEffect
  useEffect(() => {
    const handleClickOut = (e) => {
      //kiểm tra dropdown có chứa cái mình click vào hay không
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        // setShowDropDown(false);
      }
    };
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div className="relative w-full max-w-[400px] cursor-pointer">
      <div
        className="p-5 border border-gray-200 w-full cursor-pointer rounded-lg"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        Selected
      </div>
      {showDropDown && (
        <div
          className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full"
          ref={dropDownRef}
        >
          <div className="py-5 cursor-pointer">angular</div>
          <div className="py-5 cursor-pointer">react</div>
          <div className="py-5 cursor-pointer">vuejs</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
