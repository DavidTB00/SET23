import { Link } from "react-router-dom"
import logo from '../nettside_bilder/NH_logo_standard' 
import './Header.css'

export default function Header({}){
    return(
        <header>
            <h1>
                <link to="/">
                    <img src="nettside_bilder/NH_logo_standard.jpg" alt="Norsk Husflidslag"/>
                </link>
            </h1>
        </header>
    )
}