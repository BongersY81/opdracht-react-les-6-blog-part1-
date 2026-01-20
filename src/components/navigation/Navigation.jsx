

import {NavLink} from 'react-router-dom';
import './Navigation.css';
import logo from "../../assets/logo-medium.png";

function Navigation() {
    return (
        <header>

        <nav>
            <div className="nav-container">
            <ul className="navbar">
                <img src={logo} alt="logo-medium-png"/>
                <li>
                    <NavLink to={"/"} className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/overview-page"} className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}>Alle posts</NavLink>
                </li>
                <li>
                    <NavLink to={"/blogposts"} className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}>Nieuwe post</NavLink>
                </li>
            </ul>
        </div>
        </nav>
        </header>
    );
}
export default Navigation;