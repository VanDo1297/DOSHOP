import React from 'react';
import './Offert.css';
import offert from '../../assets/offert.png';

function Offert() {

    return (
        <section className="offer section">
            <div className="offer__container bg-grid">
                <div className="offer__data">
                    <h3 className="offer__title">50% OFF</h3>
                    <p className="offer__description">In Adidas Superstar sneakers</p>
                    <a href="#" className="button">Shop Now</a>
                </div>
                <img src={offert} alt="" className="offer__img"/>
            </div>
        </section>
    )
}

export default Offert;