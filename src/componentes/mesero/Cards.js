import React, { useState } from 'react';
import styles from './Cards.module.css';
import { ModalBurger } from './ModalBurger';

const Cards = ({ dataProduct, onAdd}) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div
      className={styles.cardContainer}
      key={dataProduct.id}
    >
      <div className="card-header">{dataProduct.name}</div>
      <div className="card-body">
        <p className="card-text">$ {dataProduct.price}</p>
        <div>
          {dataProduct.submenu === "Burger" ? (
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="btnCards"
                type="button"
              >
                OPCIONES
              </button>
              <ModalBurger 
              showModal={showModal}
              setShowModal={setShowModal} 
              dataModal={dataProduct} 
              onAdd={onAdd}
              order={onAdd}
              />
            </div>
          ) : (
            <div>
              <button
                onClick={() => onAdd(dataProduct)}
                className="btnCards"
                type="submit"
              >
                AGREGAR
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Cards };