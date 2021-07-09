import React, { useRef, useState } from 'react'
// import { useAuth } from '../../hooks/useAuthListener'
import { Link } from "react-router-dom"
import ForgotCSS from './ForgotPassword.module.css'

export default function ForgotPassword() {
     const emailRef = useRef()
     // const { resetPassword } = useAuth()
     const [error, setError] = useState("")
     const [message, setMessage] = useState("")
     const [loading, setLoading] = useState(false)

     async function handleSubmit(e) {
          e.preventDefault()

          try {
               setMessage("")
               setError("")
               setLoading(true)
               // await resetPassword(emailRef.current.value)
               setMessage('Check you inbox for further instructions')
          } catch {
               setError("Failed to reset password")
          }
          setLoading(false)
     }

     return (
          <div className={ForgotCSS.forgot}>
               <form className={ForgotCSS.forgot_card} onSubmit={handleSubmit}>
                    <h2 className={ForgotCSS.forgot_h2}>Password Reset</h2>

                    <div className={ForgotCSS.inputBox}>
                         <input type="email" id="email" placeholder="Email" className={ForgotCSS.input} ref={emailRef} required />
                    </div>

                    {error && <div className={ForgotCSS.error}>{error}</div>}
                    {message && <div className={ForgotCSS.message}>{message}</div>}

                    <button disabled={loading} className={ForgotCSS.reset_btn} type="submit" >Reset Password</button>

                    <div className={ForgotCSS.login}>
                         <Link to="/login">Login</Link>
                    </div>

                    <div className={ForgotCSS.need}>
                         Need an account? <Link to="/signup">Sign Up</Link>
                    </div>

               </form>
          </div>
     )
}
