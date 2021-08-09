

const updatePlace = (place) =>{
    return{
        type: "UPDATE_PLACE",
        payload: place,
    };
};

const updatePlaceData = (place) => {
    return (dispatch) => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=e3f10f87064346f98bb135349210508&q=${place}`)
  .then(res=>res.json())
  .then(data => {
    dispatch({
         type: "UPDATE_PLACE_DATA",
        payload: data,
    });
  })};
};

const toggleTheme = () => {
    return{
        type: "TOGGLE_THEME",
    };
};

export {updatePlace, updatePlaceData, toggleTheme};
