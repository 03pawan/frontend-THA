import { useDispatch, useSelector } from "react-redux";
import {updatePlace, updatePlaceData} from "../actions"

const Form = () => {
    const theme = useSelector ((state)=>state.theme);
    const place = useSelector(state => state.place);
    const dispatch = useDispatch();
    return(
        <div className='container'>
        <div className='row'>
        <div className="col-12 form">
            <input type="text" onChange={(e)=>{
                dispatch(updatePlace(e.target.value));
            }} value={place}></input>
            <button className={theme ? "btn btn-primary btn-primary" : "btn btn-dark"} onClick={
                ()=>{
                    dispatch(updatePlaceData(place));
                }
            }>Submit</button>
          </div>
          </div>
        </div>
    );
}

export default Form;