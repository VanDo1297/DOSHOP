import React from 'react';
import imgCollection1 from '../../assets/collection1.png';
import imgCollection2 from '../../assets/collection2.png';
import './Collection.css';

function Collection() {

    return (
        <section className="collection section">
            <div className="collection__container bg-grid">
                <div className="collection__card">
                    <div className="collection__data">
                        <h3 className="collection__name">Nike</h3>
                        <p className="collection__description">New Collection</p>
                        <a href="#" className="button-light">Buy now  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                    </div>
                    <img src={imgCollection1} alt="" className='collection__img'/>
                </div>

                <div className="collection__card">
                    <div className="collection__data">
                        <h3 className="collection__name">Addidas</h3>
                        <p className="collection__description">New Collection</p>
                        <a href="#" className="button-light">Buy now  <i className='bx bxs-right-arrow-alt button-icon'/></a>
                    </div>
                    <img src={imgCollection2} alt="" className='collection__img'/>
                </div>
            </div>
        </section>
    )
}

export default Collection;