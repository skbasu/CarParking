import React, { useState, useEffect } from 'react';
import db from './firebase';
import CarsList from './components/CarsList';
import Form from './components/Form';
import Infobox from './components/Infobox';
import './App.css';

const App = () => {

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
    <div className="app">
      <div className='app__left'>
        <h2 className='app__title'>Car Parking</h2>
        <Form />
        <Infobox />
      </div>
      <div className='app__right'>
        {
          cars.map((car) => (
            <CarsList 
              key={car.id} 
              number={car.number} 
              name={car.name} 
              checkIn={car.checkIn} 
              checkOut={car.checkOut} 
              delCar={car}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
