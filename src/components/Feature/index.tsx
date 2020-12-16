import React from 'react';
import imgFeatured1 from '../../assets/featured1.png';
import imgFeatured2 from '../../assets/featured2.png';
import imgFeatured3 from '../../assets/featured3.png';
import './Feature.css';

function Feature() {

    return (
        <section className='featured section' id='featured'>
            <h2 className="section-title">FEATURED</h2>

            <div className="featured__container bg-grid">
                <article className='sneaker'>
                    <div className="sneaker__sale">Sale</div>
                    <img src={imgFeatured1} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Jordan</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
                <article className='sneaker'>
                    <div className="sneaker__sale">Sale</div>
                    <img src={imgFeatured2} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
                <article className='sneaker'>
                    <div className="sneaker__sale">Sale</div>
                    <img src={imgFeatured3} alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free Rn</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="" className="button-light">Add to Cart  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                </article>
            </div>
        </section>
    );
}

export default Feature;
