import React, { useState, useEffect } from 'react';
import styles from './Mesero.module.css';
import { Header } from '../header/Header';
import { MenuBtn } from './MenuBtn';
import { Cards } from './Cards';
import { ResumenPedido } from './ResumenPedido';


const Mesero = () => {
    const [dataState, setDataState] = useState([]);
    const [menu, setMenu] = useState("DESAYUNOS");
    const [order, setOrder] = useState([]);
  
    useEffect(() => {
      getProduct();
    }, []);
  
    const getProduct = () => {
      fetch("data.json")
        .then((products) => products.json())
        .then((data) => setDataState(data));
      //dataState empieza con un arr vacio y cambia su estado a la data traida con fetch con la funcion setDataState
    };

    const onAdd = (product) => {
      //exist busca que el producto exista en el resumen y para eso trata de encontrar que el id del articulo sea igual al id de product
      const exist = order.find((el) => el.id === product.id);
      if (exist) {
        setOrder(
          order.map((el) =>
            el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el
          )
        );
        console.log(exist);
      } else {
        setOrder([...order, { ...product, qty: 1 }]);
      }
    };
  
    const onRemove = (product) => {
      //exist busca que el producto exista en el resumen y para eso trata de encontrar que el id del articulo sea igual al id de product
      const exist = order.find((el) => el.id === product.id);
      if (exist.qty === 1) {
        setOrder(order.filter((el) => el.id !== product.id));
      } else {
        setOrder(
          order.map((el) =>
            el.id === product.id ? { ...exist, qty: exist.qty - 1 } : el
          )
        );
      }
    };
  
   const onRemoveAll = (products) => {
    const exist = order.find((el) => el.id === products.id);
      if (exist.qty !== 0) {
        setOrder(order.filter((el) => el.id !== products.id));
      }
  
   }
  
    return (
        <>
            <div className={styles.containerMesero}>
                <Header /> 
                <MenuBtn setMenu={setMenu} />
                <div className={styles.containerMenu}>
                {dataState
            .filter((products) => products.type === menu)
            .map((item) => (
              <Cards
                key={item.id}
                dataProduct={item}
                setOrder={setOrder}
                order={order}   
                onAdd={onAdd}          
              />
            ))}
            </div>
            <div className={styles.containerOrder}>
          <ResumenPedido onAdd={onAdd} onRemove={onRemove} order={order} setOrder={setOrder} onRemoveAll={onRemoveAll}/>
        </div>
      </div>
    </>
  );
};

export { Mesero };