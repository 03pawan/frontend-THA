
const addItem = (item) => {

    return{
        type: "ADD_ITEM",
        payload : item
    };
};

const delItem = (id) => {

    return{
        type: "DEL_ITEM",
        payload : id
    };
};

export {addItem, delItem};