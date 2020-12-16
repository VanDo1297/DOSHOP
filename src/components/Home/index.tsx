import React from 'react';
import img from '../../assets/imghome.png';
import './Home.css';

function Home() {

    return (
        <section className="home" id='home'>
            <div className="bg-grid home__container">
                <div className="home__sneaker">
                    <div className="home__shape"></div>
                    <img src={img} alt="" className="home__img"/>
                </div>

                <div className="home__data">
                    <span className="home__new">New in</span>
                    <h1 className="home__title">BOOST <br />SPLY - 340</h1>
                    <p className="home__description">Exlore the new collections of sneakers</p>
                    <a href="#" className="button">Explore now</a>
                </div>
            </div>
        </section>
                 
    );
}

export default Home;
