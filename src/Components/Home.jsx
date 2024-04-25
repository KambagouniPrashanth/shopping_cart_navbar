import axios from "axios";
import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartAction";
import Navbar from "./Navbar";

const Home=()=>{
  const dispatch=useDispatch()
  const[products,setProducts]=useState([]);
  
  async function displayData(){
    try{
        let response=await axios.get("https://dummyjson.com/products")
        setProducts(response.data.products)
        console.log(response.data.products)

    }
    catch(e){
        console.log(e.message)

    }
  }
  useEffect(()=>{
    displayData()
    

  },[])

    return(
        <div>
            <h1 style={{textAlign:"center"}}>All Items</h1>
            <div className="allitems">
                {
                    products.map((item,index)=>(
                        <div className="product">
                            <img src={item.thumbnail}/>
                            <p>Title:{item.title}</p>
                            <p>Price:{item.price}</p>
                            <button onClick={()=>dispatch(addToCart(item))}>AddToCart</button>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default Home;