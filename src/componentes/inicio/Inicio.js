import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Inicio.module.css'
import logo from '../../imagenes/logo.png';

const Inicio = () => {
  return (
    <>
    <main className={styles.containerInicio}>
            <figure>
                <img src={logo} alt="Logo" className={styles.logo} />   
            </figure>
        <section className={styles.containerButtons}>
            <NavLink to="/Mesero">
            <button className={styles.btnInicio} type="button">MESERX</button>
            </NavLink>
            <NavLink to="/Cocina">
            <button className={styles.btnInicio} type="button">COCINA</button>
            </NavLink>
        </section>
    </main>
    </>
  );
};

export default Inicio;