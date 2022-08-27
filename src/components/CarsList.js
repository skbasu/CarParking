import React from 'react';
import './CarsList.css';
import db from '../firebase';

const CarsList = ({ number, name, checkIn, checkOut, delCar }) => {

    const deleteCar = (car) => {
        db
            .collection("cars")
            .doc(car.id)
            .delete()
            .then(() => {
                alert("Car Deleted");
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className='carsList'>
            <h2 className='item__number'>{number}</h2>
            <h3 className='item__name'>{name}</h3>
            <h4 className='item__time' style={{ color: "green" }}>CheckIn - {checkIn}</h4>
            <h4 className='item__time'style={{ color: "red" }}>CheckOut - {checkOut}</h4>
            <div className='delete__container'>
                <button 
                    className='delete__button' 
                    type='submit'
                    onClick={() => deleteCar(delCar)}
                >Delete</button>
            </div>
        </div>
    )
}

export default CarsList