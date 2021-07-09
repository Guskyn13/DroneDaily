import { useContext } from 'react'
import { Link } from 'react-router-dom'
import NavbarCSS from './Navbar.module.css'
import Logo from '../../Images/Logo.png'
// import { auth } from '../../firebase/config'
import FirebaseContext from '../../Context/Firebase'
// import UserContext from '../../Context/User'


export default function Navbar() {
     // const { currentUser } = useContext(UserContext)
     const { firebase } = useContext(FirebaseContext)

     return (
          <div>
               <nav id="navbar" className={NavbarCSS.navbar}>
                    <img src={Logo} className={NavbarCSS.main_logo} alt="logo" />
                    <Link className={NavbarCSS.logo} to="/dashboard">Drone<br /><span>Daily</span></Link>
                    <div className={NavbarCSS.navbar_container}>
                         <ul className={NavbarCSS.list}>

                              <li className={NavbarCSS.list_item}>
                                   <Link className={NavbarCSS.link} to="/upload">Upload
                                   </Link>
                              </li>

                              <li className={NavbarCSS.list_item}>
                                   <Link className={NavbarCSS.link} to="/showcase">Showcase</Link>
                              </li>

                              <li className={NavbarCSS.list_item}>
                                   <Link className={NavbarCSS.link} to="/update-profile">Update Profile</Link>
                              </li>

                              <li className={NavbarCSS.list_item}>
                                   <Link to="/" className={NavbarCSS.link} onClick={() => firebase.auth().signOut()} onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                             firebase.auth().signOut()
                                        }
                                   }}>Log Out</Link>
                              </li>
                         </ul>
                    </div>
               </nav>
               {/* {!currentUser && (
                    <Link to="/login">Login</Link>
               )} */}
          </div>
     )
}