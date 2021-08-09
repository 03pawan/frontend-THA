import {useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector ((state)=>state.theme);
    return(
        <div className="toggle-theme">
            <button className={theme ? "btn btn-dark" : "btn btn-light"} onClick={()=>{
                dispatch(toggleTheme());
                console.log("clicked");
            }}>
            {theme ? "Dark" : "Light"}
            </button>
        </div>
    )
}

export default ThemeToggle;