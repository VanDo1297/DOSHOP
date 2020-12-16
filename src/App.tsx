import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Feature from './components/Feature';
import Collection from './components/Collection';
import Women from './components/Women';
import Offert from './components/Offert';
import Men from './components/Men';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import './App.css';



function App() {
    return (
        <div className="App">
            <Header />
            <main className='l-main'>
                <Home />
                <Feature />
                <Collection />
                <Women />
                <Offert/>
                <Men />
                <Newsletter/>
            </main>
            <Footer />
        </div>
    );
}

export default App;
