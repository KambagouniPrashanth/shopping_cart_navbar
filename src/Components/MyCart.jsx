import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeItem } from "../redux/action/cartAction";

import Navbar from "./Navbar";

const MyCart=()=>{
    const cartData=useSelector(state=>state)
    const dispatch=useDispatch()
    console.log(cartData)
    let sum = cartData.reduce((total, item) => total + item.price, 0);

    return(
        <div>
           
            <h1 style={{textAlign:"center"}}>My Cart</h1>
            <div className="mycart">
                <div className="allitemsmycart">
                    {
                        cartData.map((item,index)=>(
                            <div className="product" key={index}>
                                <img src={item.thumbnail}/>
                                <p>Title:{item.title}</p>
                                <p>Price:{item.price}</p>
                                <button onClick={()=>dispatch(removeItem(item.id))}>Remove</button>

                            </div>
                        ))
                    }
                
                </div>
            
                <div className="checkoutmycart">
                        <h1 style={{backgroundColor:"#3cb371",color:"white"}}> check out</h1>
                        {
                        cartData && cartData.map((item,index)=>(
                                <div>
                                <p >{item.title}           ${item.price}</p>
                                
                                </div>
                            ))
                        }
                        <p style={{backgroundColor:"#3cb371",color:"white"}}>Total Price:  ${sum}</p>
                </div>

            </div>
            
           


        </div>
    )
}

export default MyCart;