import React from 'react';
import './Footer.css';
function Footer(){

    return (
        <footer className='footer section'>
            <hr />
            <div className="footer__container bg-grid">
                <div className="footer__box">
                    <h3 className="footer__title">Soldado</h3>
                    <p className="footer__Description">new collection of shoes 2020.</p>
                </div>
                <div className="footer__box">
                    <h3 className="footer__title">EXPLORE</h3>
                    <ul>
                        <li>
                            <a href="#home" className="footer__link">Home</a>
                        </li>
                        <li>
                            <a href="#featured" className="footer__link">Featured</a>
                        </li>
                        <li>
                            <a href="#women" className="footer__link">Women</a>
                        </li>
                        <li>
                            <a href="#men" className="footer__link">Men</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;