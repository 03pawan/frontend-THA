const changeName = (input) => {
   return {
        type: "changeName",
        payload : input
    };
}

const changeEmail = (input) => {

    return {
        type: "changeEmail",
        payload : input
    };
}

export {changeName,changeEmail};