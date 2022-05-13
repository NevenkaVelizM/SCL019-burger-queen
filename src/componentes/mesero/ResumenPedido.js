import React, { useState, useEffect } from 'react';
import styles from './ResumenPedido.module.css';
import { db } from '../../firebase/firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';
import { BiMinusCircle, BiPlusCircle, BiTrash } from 'react-icons/bi';

const ResumenPedido = ({ order, setOrder, onAdd, onRemove, onRemoveAll }) => {
  const [totalPrice, setTotalPrice] = useState(0)


  useEffect(() => {
  const newTotalPrice = order.reduce(
    (price, items) => price + items.qty * items.price,
    0
  );
  setTotalPrice(newTotalPrice)
}, [order]);

  const [count, setCount] = useState(1);
  const [client, setClient] = useState('');

  const objOrder = async () => {
    await addDoc(collection(db, "orders"), {
      client: client,
      numOrder: count,
      item: order,
      totalPrice: totalPrice,
    });
  };

  console.log( "orders".docs);

  return (
     <>
      <div className="headerPedido">
        <div className="sectionCliente">
          <label htmlFor="cliente"> Cliente: </label>
          <input
            className={styles.inputCliente}
            value={client.trim()}
            type="text"
            required="required"
            id="cliente"
            onChange={(e) => {
              setClient(e.target.value);
            }}
          />
        </div>
        <div className={styles.contadorPedido}>
          <p> # Pedido { count }</p>
        </div>
      </div>

      <div className={styles.bodyPedido}>
        <div className={styles.titleBodyPedido}>
          <p>ITEM</p>
          <p>CANT</p>
          <p>P.UNIT</p>
          <p>P.TOTAL</p>
        </div>
        </div>
        <div>
        {order.map((item) => (
          <div key={item.name}>
            <div className={styles.itemsBodyPedido}>
              <p className="item-name">{item.name}</p>
              <BiMinusCircle className="btnOnRA"
                type="button"
                onClick={() => onRemove(item)} />
              <p className="item-data"> {item.qty} </p>
              <BiPlusCircle className="btn-OnRA"
                type="button"
                onClick={() => onAdd(item)} />
              <p className="item-data"> $ {item.price} </p>
              <BiTrash className="btn-OnRA"
                type="button"
                onClick={() => onRemoveAll(item)} />       
              <p className="item-data"> $ {item.price * item.qty} </p>
            </div>
          </div>
        ))}
        <div className="total-price">TOTAL $ {totalPrice}</div>
        <div className="enviar">
          {order.length !== 0 && client.length !== 0 ? (
            <button
              type="submit"
              className="btn-cards"
              onClick={() => {
                objOrder();
                setCount(count + 1);
                setOrder([]);
                setClient("");
              }}
            >
              ENVIAR PEDIDO
            </button>
          ) : (
            <div className="no-order">ORDEN VACIA O SIN NOMBRE</div>
          )}
        </div>
      </div>
    </>
  );
};
export { ResumenPedido };