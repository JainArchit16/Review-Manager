import React, { useState } from "react";
import Card from "./Card";

const Testimonial = (props) => {
  const[index,setIndex]=useState(0);
  let reviews=props.reviews;
  let len=reviews.length;
  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} index={index} setIndex={setIndex} len={len}/>
    </div>
  );
};

export default Testimonial;
