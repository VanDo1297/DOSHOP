import React from 'react';
import './Newsletter.css';

function Newsletter(){

    return (
        <section className='newsletter section'>
            <div className="newsletter__container bg-grid">
                <div>
                    <h3 className='newsletter__title'>Subscribe And Get <hr/> 10% OFF</h3>
                    <p className="newsletter__description">Get 10% discount for all products</p>
                </div>

                <form action="" className="newsletter__subscribe">
                    <input type="text" placeholder='Example@email.com' className="newsletter__input"/>
                    <a href="#" className="button">Subscribe</a>
                </form>
            </div>
        </section>
    )
}

export default Newsletter;