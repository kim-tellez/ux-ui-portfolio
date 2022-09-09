import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './css/navbar.css';
import logo from "./img/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar nav-nav sticky-top navbar-expand-lg navbar-light'>
        <div className="container-fluid">
          <div className='container'>
            <div className="d-flex justify-content-center">
              <NavLink className="navbar-brand" to={"/"}>
                Kim T&eacute;llez | UX/UI Design Portfolio 
                  </NavLink>
              </div>
            

            <div className="d-none d-lg-block d-lg-flex justify-content-center align-items-center">
              <a className="navbar-brand nav-large m-auto" href={"/"}>
                <img alt="Site Logo" src={logo} />
              </a>
            </div>
          
            <div className='menu-icon' onClick={handleClick}>
              <div className={click ? '' : 'fa-box'}><i className={click ? 'fas fa-times' : 'fas fa-bars fa-box'} /></div>
            </div>
            <ul className={click ? 'nav-menu active' : 'navbar-nav nav-menu'}>
              <div className="d-block  d-lg-none m-auto"><img className="img-fluid" alt="Site Logo" src={logo} /></div>
              <li className='nav-item pr-3'>
                  <NavLink
                    to={"/"}
                    className='nav-link'
                    activeClassName="active"
                    onClick={closeMobileMenu}
                  >
                    HOME
                  </NavLink>
              </li>
              
              <li className="nav-item dropdown pr-3">
                <div className='d-none d-lg-block'>
                    <button type='button' className="nav-link btn-clr dropdown-toggle btn" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CASE STUDIES
                    </button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                        <NavLink activeClassName="active" className="dropdown-item" to={"/case-studies/haven-station"} >Haven Station</NavLink>
                        <NavLink activeClassName="active" className="dropdown-item" to={"/case-studies/vauven"} >Vauven</NavLink>
                        <NavLink activeClassName="active" className="dropdown-item" to={"/case-studies/bpmusic"} >BPMusic</NavLink>
                        <NavLink activeClassName="active" className="dropdown-item" to={"/case-studies/readingful-moments"} >Readingful Moments</NavLink>
                    </div>
                </div>

                <div className='dd d-inline d-lg-none'>
                    <ul>CASE STUDIES
                        <li><NavLink className={"inline-link"} activeClassName="active" to={"/case-studies/haven-station"} onClick={closeMobileMenu}>Haven Station</NavLink></li>
                        <li><NavLink className={"inline-link"} activeClassName="active" to={"/case-studies/vauven"} onClick={closeMobileMenu}>Vauven</NavLink></li>
                        <li><NavLink className={"inline-link"} activeClassName="active" to={"/case-studies/bpmusic"} onClick={closeMobileMenu}>BPMusic</NavLink></li>
                        <li><NavLink className={"inline-link"} activeClassName="active" to={"/case-studies/readingful-moments"} onClick={closeMobileMenu}>Readingful Moments</NavLink></li>
                    </ul>
                </div>
              </li>

              <li className='nav-item pr-lg-5'>
                <a target="_blank" 
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/kimberly-tellez/"
                  className='nav-link'
                  activeClassName="active"
                  onClick={closeMobileMenu}
                >
                  LINKEDIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;