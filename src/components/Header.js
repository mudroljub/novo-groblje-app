import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
    <nav>
        <ul>
            <li>
                <NavLink to="/" activeClassName="active">Mapa</NavLink>
            </li>
            <li>
                <NavLink to="/vesti" activeClassName="active" replace >Vesti</NavLink>
            </li>
            <li>
                <NavLink to="/kategorija" activeClassName="active" replace >Kategorija</NavLink>
            </li>
            <li>
                <NavLink to="/znamenitosti" activeClassName="active" replace >Znamenitosti</NavLink>
            </li>
            <li>
                <NavLink to="/info" activeClassName="active" replace >Info</NavLink>
            </li>
        </ul>
    </nav>
);

export default Header;