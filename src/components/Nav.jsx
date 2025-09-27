import React, { useContext, useEffect, useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

import 'react-toastify/dist/ReactToastify.css'
const Nav = () => {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);

  let items = useSelector((state) => state.cart);

  // Show notification on item addition
  useEffect(() => {
    if (items.length > 0) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [items.length]);

  return (
    <div className="w-full h-[100px] bg-blue-500 flex justify-between items-center px-8 relative">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <IoFastFoodOutline className="w-[30px] h-[30px] text-green-600" />
      </div>

      <form
        className="w-[50%] md:w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="text-green-600 w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search items"
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <span className="absolute text-black top-0 right-2 font-semibold text-[16px]">
          {items.length}
        </span>
        <FaCartArrowDown
          className="w-[30px] h-[30px] text-green-600 cursor-pointer"
        />

        {/* Custom Notification */}
        {showNotification && (
          <div className="absolute bottom-[-35px] left-[-90px] h-[30px] w-[180px] bg-white text-green-600 flex items-center gap-2- rounded-2xl">
            <AiOutlineCheck className="w-5 h-5 mx-2" />
            <span className="font-bold text-sm">Item added to cart!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
