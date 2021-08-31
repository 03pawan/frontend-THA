import { useContext } from "react"
import './App.css'
import {ThemeContextType} from "./ThemeContext";
import ThemeContext from './ThemeContext';

const ThemeToggle = () => {
    const {theme, setTheme} = useContext<ThemeContextType>(ThemeContext);
    return(
            <button className={theme ? "theme-toggle dark" : "theme-toggle"} onClick={()=>{
                setTheme(!theme)
            }}>
                {theme ? "Light":"Dark"}
            </button>
        )
}

export default ThemeToggle;