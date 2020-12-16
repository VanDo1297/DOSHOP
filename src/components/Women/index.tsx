import React from 'react';
import './Women.css';
import women1 from '../../assets/women1.png';
import women2 from '../../assets/women2.png';
import women3 from '../../assets/women3.png';
import women4 from '../../assets/women4.png';

function Women() {

    return (
        <section className="women section" id='women'>
            <h2 className="section-title">WOMEN SNEAKERS</h2>
            <div className="women__container bg-grid">
                <article className='sneaker'>
                    <img src={women1} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
                <article className='sneaker'>
                    <img src={women2} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
                <article className='sneaker'>
                    <img src={women3} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
                <article className='sneaker'>
                    <img src={women4} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
            </div>
        </section>
    )
}

export default Women;