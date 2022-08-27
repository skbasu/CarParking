import React, { useEffect, useState } from 'react';
import "./InfoBox.css";
import db from '../firebase';

const Infobox = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      await db.collection("cars").onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setCars(items);
      });
    }

    getCars();
  }, []);

  return (
    <div className='infoBox'>
      <h2 className='title'>Cars in Garage</h2>
      <h1 className='value'>{cars.length}</h1>
    </div>
  );
}

export default Infobox;