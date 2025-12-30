

import {NavLink} from 'react-router-dom';
import './Navigation.css';


function Navigation() {
    return (

        <nav>
            <ul>
                <li>
                    <NavLink to={"/"} className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blogposts" className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}>Alle posts</NavLink>
                </li>
                <li>
                    <NavLink to="//overviewpage" className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}>Nieuwe post</NavLink>
                </li>
            </ul>
        </nav>

    );
}
export default Navigation;