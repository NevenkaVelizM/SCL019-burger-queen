import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../imagenes/logo.png';
import { FaClipboardList, FaBell, FaHome } from 'react-icons/fa';


const Header = () => {
    
    return (
        <>
            <header className={styles.containerHeader}>
                <img src={logo} alt="Logo" className={styles.logo} /> 
                <NavLink to="/Mesero">
                    <FaClipboardList className={styles.iconNav}/>MENU
                </NavLink>
                <NavLink to="/Pedidos">
                    <FaBell className={styles.iconNav}/>PEDIDOS
                </NavLink>
                <NavLink to="/">
                    <FaHome className={styles.iconNav}/>INICIO
                </NavLink>
            </header>
        </>
    );
};
 
export { Header };