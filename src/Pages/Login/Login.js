import React, { useState, useContext, useEffect } from 'react'
import LoginCSS from './Login.module.css'
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../../Context/Firebase'

//Images
import Logo from '../../Images/Logo.png'

export default function Login() {
     const history = useHistory()
     const { firebase } = useContext(FirebaseContext)
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');

     const isInvalid = password === '' || email === '';

     const handleLogin = async (event) => {
          event.preventDefault()

          try {
               await firebase.auth().signInWithEmailAndPassword(email, password)
               history.push("/dashboard")
          } catch (error) {
               setEmail('')
               setPassword('')
               setError(error.message)
          }
     }

     useEffect(() => {
          document.title = 'Login - Drone Daily'
     }, [])

     return (
          <div className={LoginCSS.login}>

               <img src={Logo} className={LoginCSS.imgLogo} alt="logo" />

               <form className={LoginCSS.login_card} onSubmit={handleLogin}>
                    <h2 className={LoginCSS.login_h2}>Log In</h2>

                    <div className={LoginCSS.inputBox}>
                         <input type="email" id="email" name="email" value={email} placeholder="Email" className={LoginCSS.input} onChange={({ target }) => setEmail(target.value)} required />
                    </div>

                    <div className={LoginCSS.inputBox}>
                         <input type="password" id="password" name="password" value={password} placeholder="Password" className={LoginCSS.input} onChange={({ target }) => setPassword(target.value)} required />
                    </div>

                    <div className={LoginCSS.errors}>
                         <p style={{ color: "red" }} id="err"></p>
                    </div>

                    {error && <div className={LoginCSS.error} style={{ color: "red" }}>{error}</div>}

                    <button disabled={isInvalid} className={LoginCSS.login_btn} type="submit" >Log In</button>

                    <div className={LoginCSS.forgot}>
                         <Link to="/forgot-password">Forgot Password</Link>
                    </div>

                    <div className={LoginCSS.need}>
                         Need an account? <Link to="/signup">Sign Up</Link>
                    </div>

                    <div className={LoginCSS.needs}><Link to="/">Cancel</Link>
                    </div>

               </form>
          </div>
     )
}