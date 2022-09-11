import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/navbar.css';
import logo from "./img/logo.png";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar sticky-top navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <div className='container'>
            <NavLink to={'/ux-ui-portfolio/'} className='navbar-logo' onClick={closeMobileMenu}>
              Kim Téllez | UX/UI <br className='head-break' />Design Portfolio
            </NavLink>

            <div className="d-none d-lg-block d-lg-flex justify-content-center align-items-center">
              <a href={"/ux-ui-portfolio"}>
                <img alt="Site Logo" src={logo} />
              </a>
            </div>

            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <div className="d-block  d-lg-none m-auto pb-3"><img className="img-fluid" alt="Site Logo" src={logo} /></div>
              <li className='nav-item'>
                <NavLink to={'/ux-ui-portfolio/'} className='nav-link' activeClassName='active' onClick={closeMobileMenu}>
                  HOME
                </NavLink>
              </li>

              <li className="nav-item dropdown d-none d-lg-block">
                <span className="nav-link dropdown-toggle" activeClassName='active' role="button" data-toggle="dropdown" aria-expanded="false">
                  CASE STUDIES
                </span>
                <div className="dropdown-menu">
                  <NavLink to={'/ux-ui-portfolio/case-studies/vauven'} className='dropdown-item' onClick={closeMobileMenu}>Vauven</NavLink>
                  <NavLink to={'/ux-ui-portfolio/case-studies/haven-station'} className='dropdown-item' onClick={closeMobileMenu}>Haven Station</NavLink>
                  <NavLink to={'/ux-ui-portfolio/case-studies/bpmusic'} className='dropdown-item' onClick={closeMobileMenu}>BPMusic</NavLink>
                  <NavLink to={'/ux-ui-portfolio/case-studies/readingful-moments'} className='dropdown-item' onClick={closeMobileMenu}>Readingful Moments</NavLink>
                </div>
              </li>

              <li className="nav-item dropdown d-lg-none d-block">
                <NavLink className="nav-link" activeClassName='active' to={"/ux-ui-portfolio/case-studies/vauven"}>
                  CASE STUDIES
                </NavLink>
                <ul>
                  <li><NavLink to={'/ux-ui-portfolio/case-studies/vauven'} className='nav-mini' activeClassName='active' onClick={closeMobileMenu}>Vauven</NavLink></li>
                  <li><NavLink to={'/ux-ui-portfolio/case-studies/haven-station'} className='nav-mini' activeClassName='active' onClick={closeMobileMenu}>Haven Station</NavLink></li>
                  <li><NavLink to={'/ux-ui-portfolio/case-studies/bpmusic'} className='nav-mini' activeClassName='active' onClick={closeMobileMenu}>BPMusic</NavLink></li>
                  <li><NavLink to={'/ux-ui-portfolio/case-studies/readingful-moments'} className='nav-mini' activeClassName='active' onClick={closeMobileMenu}>Readingful Moments</NavLink></li>
                </ul>
              </li>

              <li className='nav-item'>
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