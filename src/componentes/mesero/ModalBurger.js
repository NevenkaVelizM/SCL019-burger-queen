import React, { useState } from 'react';
import {FaTimesCircle } from 'react-icons/fa';
import styles from './ModalBurger.module.css';

const ModalBurger = ({ showModal, dataModal, onAdd, setShowModal }) => {
  const [proteinType, setProteinType] = useState(""); //
  const [addPriceExtra, setAddPriceExtra] = useState([]);
  const [addExtra, setAddExtra] = useState([]);

  const TypeExtra = Object.keys(dataModal.extras); // huevo y queso
  const PriceExtra = Object.values(dataModal.extras); //precio de huevo y queso
  
  const handleReset = () => {
    setProteinType("");
    setAddPriceExtra([]);
    setAddExtra([]);
  };
  return (
    <>
      {showModal ? (
        <div className={styles.backgroundModal}>
          <div className={styles.containerModal}>
            <div className={styles.modalHeader}>
              <FaTimesCircle
                className={styles.btnExit}
                onClick={() => {
                  setShowModal(false);
                  handleReset();
                }}
              />
              <p>{dataModal.name}</p>
            </div>
            <div className={styles.containerProtein}>
              {dataModal.protein.map((item) => (
                <label key={item}>
                  <input
                    type="radio"
                    value={item}
                    name="protein"
                    onChange={
                      () => setProteinType(item)
                      //console.log(e.target.value)
                    }
                  />
                  {item}
                </label>
              ))}
            </div>
           
            <div className={styles.containerExtras}>
            ADICIONALES 
            {TypeExtra.map((item, index) => (
              <label key={item}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item[index]}
                  name={item}
                  onChange={(e) => {
                    setAddExtra([...addExtra, e.target.name]);
                    setAddPriceExtra([
                      ...addPriceExtra,
                      parseInt(PriceExtra[index]),
                    ]);
                  }}
                />
                {item} $ {PriceExtra[index]}
              </label>
            ))}
            </div>
            <button
              className={styles.btnModal}
              type="submit"
              onClick={() => {
                onAdd({
                  name: dataModal.name + " " + proteinType + " " + addExtra,
                  price:
                    parseInt(dataModal.price) +
                    addPriceExtra.reduce(
                      (previousValue, currentValue) =>
                        previousValue + currentValue,
                      0
                    ),
                  id: dataModal.id + proteinType + addPriceExtra,
                });
                setShowModal(false);
                handleReset();
              }}
            >
              AGREGAR
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export { ModalBurger };