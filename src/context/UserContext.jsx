import React, { createContext, useState } from 'react'
import { food_items } from "../food";
export const dataContext = createContext();  
const UserContext = ({ children }) => {
    console.log(children);
  const [input, setInput] = useState("");
  const[cate , setCate] = useState(food_items);
  let[showCart , setShowCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
    showNotification,
    setShowNotification
    

  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
};

export default UserContext;
