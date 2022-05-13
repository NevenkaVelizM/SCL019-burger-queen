import React from 'react';
import styles from './MenuBtn.module.css';

const MenuBtn = ({ setMenu }) => {
    return (
      <>
        <div className={styles.containerMenuBtn}>
          <button
            onClick={() => {
              setMenu("DESAYUNOS"); //setMenu en su estado inicializo en mesero
            }}
            className={styles.btnMenu}
          >
            DESAYUNOS
          </button>
          <button
            onClick={() => {
              setMenu("HAMBURGUESAS");
            }}
            className={styles.btnMenu}
          >
            HAMBURGUESAS
          </button>
          <button
            onClick={() => {
              setMenu("BEBIDAS");
            }}
            className={styles.btnMenu}
          >
            BEBIDAS
          </button>
        </div>
      </>
    );
  };
  export { MenuBtn };