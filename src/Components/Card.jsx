import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";


const Card = (props) => {
    let review = props.review;

    function leftShiftHandler()
    {
        if(props.index-1<0)
        {
            props.setIndex(props.len-1);
        }
        else
        {
            
            props.setIndex(props.index-1);
        }
    }
    function rightShiftHandler()
    {
        if(props.index+1>props.len-1)
        {
            props.setIndex(0);
        }
        else
        {
            props.setIndex(props.index+1);
        }
    }
    function surpriceShiftHandler() {
        let x=Math.floor(Math.random()*props.len);
        while(x==props.index)
        {
            x=Math.floor(Math.random()*props.len);
        }
        console.log(x);
        props.setIndex(x);
    }

    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-10 mx-auto ">
                <img src={review.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25" />
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize leading-3">{review.name}</p>
            </div>

            <div className="text-center mt-4">
                <p className="text-violet-300 text-sm uppercase">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500 ">{review.text}</div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight />
            </div>


            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={rightShiftHandler}
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriceShiftHandler}
        >
          Surprice Me
        </button>
      </div>

      
        </div>
    );
};

export default Card;
