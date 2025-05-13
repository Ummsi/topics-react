import { useEffect, useState } from 'react'
import { getAllProducts } from './Utils/Product'
import './App.css'
import Card from './Components/Card';

function App() {
const [products, setProducts] = useState([]);
const [cartItems, setCartItems] = useState([]);
const [showCarts, setShowCarts] = useState(false);
useEffect(()=>{
fetchproducts();  
},[]);

useEffect(()=>{
const itemsIncart = JSON.parse (localStorage.getItem("cartItems"))
if (itemsIncart){
  setCartItems([...itemsIncart])
}
},[])

useEffect(()=>{
  if(cartItems.length){
    localStorage.setItem("cartItems", JSON.stringify(cartItems)) 
  }
},[cartItems])

const addCart=(item)=>{
const items = [...cartItems]
const itemInd = items.findIndex((data)=> data.id === item.id);
console.log(itemInd);
if(itemInd == -1){
items.push(item)
setCartItems([...items])
}


}

const fetchproducts = async () => {
const products = await getAllProducts();
setProducts([...products])
console.log(products);
};


const iterateOn = showCarts ? cartItems : products;

return (
<div>
    <div className="container my-10 mx-auto  ">
      <div className='fixed flex justify-between items-center w-3/4 bg-slate-900 text-white py-5 px-5 mx-5 -my-5 rounded-lg'>
      <h1 className='text-3xl flex justify-center items-center tracking-tighter leading-3 font-bold'>Shopping Cards</h1>
      <h1 onClick={()=>setShowCarts(!showCarts)} className='font-bold'>{showCarts ? "ShowAll Products" : `Card Items ${cartItems.length}`}
        </h1>
      </div>
    <section className="text-gray-600 body-font ">
      <div className=" container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap -m-4 " >
          {iterateOn.map((data) =>{ 
            const isAdded = cartItems.findIndex((product)=> product.id === data.id) !== -1;
            return <Card 
            addToCart={() =>addCart(data)}  
            key={data.id} 
            item={data}
            showremoveFromCart={showCarts === true}
            isAdded = {isAdded}
            removeFromCart={()=>{
            const allOtherItems = cartItems.filter((products)=> products.id !== data.id);
              setCartItems([...allOtherItems])
            }} 
            />
            })}
        </div>
      </div> 
</section>
  </div>

{/* <div className='flex flex-col justify-center items-center h-screen bg-slate-900 text-white gap-5'>
  <h1 className='text-5xl flex justify-center items-center'>SHOPPING CARDS</h1>
  <h1>{count}</h1>
  <h1>{count2}</h1>
  <button className='boder border-slate-900 text-black bg-slate-100 flex justify-center items-center py-2 px-10 rounded-xl' onClick={()=> setCount(count + 1)} >Update Counter</button>
  <button className='boder border-slate-900 text-black bg-slate-100 flex justify-center items-center py-2 px-10 rounded-xl' onClick={()=> setCount2(count2 + 1)} >Update Counter 2</button>
  </div>   */}
</div>
)
}

export default App
