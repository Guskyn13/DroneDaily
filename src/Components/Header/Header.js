import React from 'react'
import { Link } from 'react-router-dom'
import HeaderCss from './Header.module.css'

const Header = () => {
     return (
          <header className={HeaderCss.login_signup}>

               <nav>
                    <Link className={HeaderCss.nav}>Home</Link>
                    <Link className={HeaderCss.nav}>About</Link>
                    <Link className={HeaderCss.nav}>Contact</Link>
               </nav>
               <div className={HeaderCss.btns}>
                    <ul>
                         <li><Link to="/login">Login</Link></li>
                         <li><Link to="/signup" className={HeaderCss.signup}>Sign Up</Link></li>
                    </ul>
               </div>
          </header>
     )
}

export default Header