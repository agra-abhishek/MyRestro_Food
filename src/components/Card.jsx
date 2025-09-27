import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiMeat } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addItem  } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = ({ name, image, id, price, type }) => {

  let dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addItem({ id: id, name: name, image: image, price: price, qty: 1 }));
    toast.success(`${name} added to cart! 🛒`);
  };
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400 ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover" />
      </div>

      <div className="text-2xl font-semibold ">{name}</div>
      <div className="flex w-full justify-between items-center">
        <div className="text-green-500 text-lg font-bold">Rs- {price}/</div>
        <div
          className={`flex justify-center items-center gap-2 text-lg font-bold 
    ${type === "veg" ? "text-green-500" : "text-red-500"}`}>
        
          {type === "veg" ? <LuLeafyGreen /> : <GiMeat />}
          <span>{type}</span>
        </div>
      </div>

       {/* we make dispatch function and pass required data */}
       <button
        className="w-full p-4 bg-green-400 rounded-lg text-white font-bold text-lg hover:bg-green-600 hover:text-gray-400 transition-all duration-200"
        onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
