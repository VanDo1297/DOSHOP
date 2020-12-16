import React from 'react';
import './Header.css';

function Header() {

    const [isMenuActive, setMenuActive]= React.useState(0)
    const [isShowMenu, setShowMenu]= React.useState(false);

    const handleShowMenu =()=>{
        const nav = document.getElementById('nav-menu')
        if(nav){
            if(!isShowMenu){
                nav.classList.add('show')
            }else{
                nav.classList.remove('show')
            }
            setShowMenu(!isShowMenu)
        }
    }

    const handleClickMenu =(id: number)=>{
        setMenuActive(id)
    }

    return (
        <header className='l-header' id='header'>
            <nav className='nav bg-grid'>
                <div onClick={handleShowMenu} className="nav__toggle" id='nav-toggle'>
                    <i className='bx bxs-category' />
                </div>

                <a href="#" className="nav__logo">Soldado</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li onClick={()=>handleClickMenu(0)} className="nav__item"><a href="#home" className={`nav__link ${isMenuActive === 0 ? 'active' : ''}`}>Home</a></li>
                        <li onClick={()=>handleClickMenu(1)} className="nav__item"><a href="#featured" className={`nav__link ${isMenuActive === 1 ? 'active' : ''}`}>Feature</a></li>
                        <li onClick={()=>handleClickMenu(2)} className="nav__item"><a href="#men" className={`nav__link ${isMenuActive === 2 ? 'active' : ''}`}>Men</a></li>
                        <li onClick={()=>handleClickMenu(3)} className="nav__item"><a href="#women" className={`nav__link ${isMenuActive === 3 ? 'active' : ''}`}>Women</a></li>
                        <li onClick={()=>handleClickMenu(4)} className="nav__item"><a href="#new" className={`nav__link ${isMenuActive === 4 ? 'active' : ''}`}>New</a></li>
                        <li onClick={()=>handleClickMenu(5)} className="nav__item"><a href="#" className={`nav__link ${isMenuActive === 5 ? 'active' : ''}`}></a></li>
                    </ul>
                </div>

                <div className="nav__shop">
                    <i className='bx bxs-cart-add'></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
