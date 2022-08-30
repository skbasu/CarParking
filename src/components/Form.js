import React, { useState } from 'react';
import db from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import "./Form.css";

const Form = () => {

    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [checkOut, setcheckOut] = useState("");


    //CheckIn Time
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const checkIn = hours + ":" + minutes;


    const submitCar = (newCar) => {
        db.collection("cars")
            .doc(newCar.id)
            .set(newCar)
            .then(() => {
                alert("New Car Added");
            })
            .catch((err) => {
                alert(err.message);
            })
    }
    

    return (
        <div className='form'>
            <h2 className='form__title'>Enter the Details</h2>
            <input
                className='form__input'
                type="text"
                placeholder='Enter Vehicle Number'
                onChange={(e) => setNumber(e.target.value)}
            />
            <br /><br />
            <input
                className='form__input'
                type="text"
                placeholder='Enter Driver Name'
                onChange={(e) => setName(e.target.value)}
            />
            <br /><br />
            <h5 style={{ backgroundColor: "aliceblue", fontSize: "15px", marginBottom: "10px"}}>
                Enter Checkout Time
            </h5>
            
            <input
                className='form__input'
                type="time"
                name='time'
                onChange={(e) => setcheckOut(e.target.value)}
            />
            <br /><br />
            <button
                className='from__button'
                type='submit'
                onClick={() => submitCar({ number, name, id: uuidv4(), checkIn, checkOut })}
            >Submit</button>
        </div>
    )
}

export default Form;