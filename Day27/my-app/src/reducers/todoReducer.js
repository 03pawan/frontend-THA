
const todoReducer = (state=[],action) =>{
    if(action.type === "ADD_ITEM"){
        return [...state, action.payload];
    }
    else if(action.type === "DEL_ITEM"){
        return state.filter((item,i)=> i !== action.payload);
    }
    return state;
}

export default todoReducer;