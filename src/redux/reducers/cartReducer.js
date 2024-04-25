
let intialState=[]

const cartReducer=(state=intialState,action)=>{
    if(action.type==="ADD_TO_CART"){
        return [...state,action.payload]
    }
    else if(action.type==="REMOVE_ITEM"){
        return state.filter((item)=>item.id!==action.payload)
    }
    return state;
}
export default cartReducer;
