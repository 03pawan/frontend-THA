const nameReducer = (state= " ", action) =>{

    if(action.type === "changeName")
        state = action.payload;
    return state;
}

const emailReducer = (state= " ",action) =>{
    if(action.type === "changeEmail")
        state = action.payload;
    return state;
}

export {nameReducer, emailReducer};