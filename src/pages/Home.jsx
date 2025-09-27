import Nav from "../components/Nav";
import { Categories } from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { useContext } from "react";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
const Home = () => {
  let { cate, setCate, input , showCart , setShowCart} = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  //we use store redux here 
  let items = useSelector(state=>state.cart);
  // console.log(items)

  let subtotal = items.reduce((total , item )=> total + item.qty*item.price , 0);
  let deliveryFee = 32;
  let taxes = subtotal * 5/100;
  let total = subtotal+deliveryFee+taxes;

  console.log(total)
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
{!input ? <>  <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {Categories.map((item) => {
          return (
            <div
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-700 rounded-md shadow-2xl hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div> <div className="w-full flex flex-wrap gap-5 p-5 justify-center items-center pt-8 pb-5">
        {cate.length > 1 ?  cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))  : <div>No Dish Found</div> }
       
      </div>   </> : <div className="w-full flex flex-wrap gap-5 p-5 justify-center items-center pt-8 pb-5">
        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div> }
    
{/* //cart div */}

     <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-5  transition-all duration-500 cursor-pointer flex flex-col items-center overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"} `}>
           <header className="w-[100%] flex justify-between items-center">

            <span className=" text-green-500 text-[18px] font-bold ">Order Item </span>
            <RxCross2  className="w-[30px] h-[30px] font-bold  text-green-500 text-[28px] cursor-pointer hover:text-gray-600 transition-all duration-500" onClick={() =>setShowCart(false)}/>
            
           </header>
           <div className="w-full mt-9 flex flex-col gap-8 ">
           {items.map((item) =>(
           <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
           ))}
</div>     
{items.length > 0 ? (
  <div className="w-full border-t-2  border-grey-400 mt-7 gap-2 p-3">
    <div className="flex w-full justify-between items-center">
      <span className="text-lg font-semibold text-gray-500 ">Subtotal</span>
      <span className="text-green-600 font-semibold text-lg">Rs {subtotal}/-</span>
    </div>

    <div className="flex w-full justify-between items-center">
      <span className="text-lg font-semibold text-gray-500 ">Delivery Fee</span>
      <span className="text-green-600 font-semibold text-lg">Rs {deliveryFee}/-</span>
    </div>

    <div className="flex w-full justify-between items-center">
      <span className="text-lg font-semibold text-gray-500">Taxes</span>
      <span className="text-green-600 font-semibold text-lg">Rs {taxes}/-</span>
    </div>

    <div className="flex w-full text-xl justify-between  border-t-2  items-center mt-2 p-4">
      <span className="text-lg font-semibold text-gray-600 ">Total</span>
      <span className="text-green-600 font-semibold text-lg">Rs {total}/-</span>
    </div>

    <button className="mt-2 w-full p-4 bg-green-400 rounded-lg text-white font-bold text-lg hover:bg-green-600 hover:text-gray-400 transition-all duration-200">
      Place Order
    </button>
  </div>
) :
 <div className="text-green-500 pt-5 font-semibold text-center  text-2xl">Empty Card</div>
 }

     </div>

    </div>
  );
};

export default Home;
