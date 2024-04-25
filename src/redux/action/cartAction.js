import { ADD_TO_CART,REMOVE_ITEM } from "./actiontypes";

export const addToCart=(data)=>{
    return(
        {
            type:ADD_TO_CART,
            payload:data,
        }
    )
}
export const removeItem=(data)=>{
    return(
        {
            type:REMOVE_ITEM,
            payload:data,
        }
    )
}