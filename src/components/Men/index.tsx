import React from 'react';
import './Men.css';
import men1 from '../../assets/new1.png';
import men2 from '../../assets/new2.png';
import men3 from '../../assets/new3.png';
import men4 from '../../assets/new4.png';

function Men() {

    return (
        <section className="men section" id='men'>
            <h2 className="section-title">MEN</h2>
            <div className="men__container bg-grid">
                <article className='sneaker'>
                    <img src={men1} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
                <article className='sneaker'>
                    <img src={men2} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
                <article className='sneaker'>
                    <img src={men3} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
                <article className='sneaker'>
                    <img src={men4} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
            </div>
        </section>
    )
}

export default Men;