import React, { useState, useEffect, useContext } from 'react'
import SignupCSS from './Signup.module.css'
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../../Context/Firebase'
import { doesUsernameExist } from '../../UserFunctions/UserFunctions'

//Images
import Logo from '../../Images/Logo.png'

export default function SignUp() {
     const history = useHistory()
     const { firebase } = useContext(FirebaseContext)

     const [ username, setUsername ] = useState("")
     const [ fullName, setFullName ] = useState("")
     const [ email, setEmail ] = useState("")
     const [ password, setPassword ] = useState("")

     const [ error, setError ] = useState("")

     const isInvalid = password === "" || email === ""

     const handleSignup = async (event) => {
          event.preventDefault()

          const usernameAlreadyExists = await doesUsernameExist(username)
               if (!usernameAlreadyExists.length) {
                    try {
                         const createdNewUser = await firebase
                              .auth()
                              .createUserWithEmailAndPassword(email, password)

                         await createdNewUser.user.updateProfile({
                              displayName: username
                         })

                         await firebase.firestore().collection('users')
                              .add({
                                   userId: createdNewUser.user.uid,
                                   username: username.toLowerCase(),
                                   fullName,
                                   email: email.toLowerCase(),
                                   dateCreated: Date.now()
                              })

                         history.push('/dashboard')

                    } catch(error) {
                         setFullName("")
                         setPassword("")
                         setEmail("")
                         setUsername("")
                         setError(error.message)
                    }
               }
     }

     useEffect(() => {
          document.title = 'Sign Up - Drone Daily'
     }, [])

     return (
          <div className={SignupCSS.signup}>

               <img src={Logo} className={SignupCSS.imgLogo} alt="logo" />

               {error && <div className={SignupCSS.error} style={{ color: "red" }}>{error}</div>}

               <form className={SignupCSS.signup_card} onSubmit={handleSignup} id="signup_form" method='post' >
                    <h2 className={SignupCSS.signup_h2}>Sign Up</h2>

                    <div className={SignupCSS.inputBox}>
                         <input type="text" id="name" placeholder="Name" name="name" value={fullName} onChange={({ target }) => setFullName(target.value)} className={SignupCSS.input} required />
                    </div>

                    <div className={SignupCSS.inputBox}>
                         <input type="text" id="username" placeholder="Username" name="username" value={username} onChange={({ target }) => setUsername(target.value)} className={SignupCSS.input} />
                    </div>

                    <div className={SignupCSS.inputBox}>
                         <input type="email" id="email" placeholder="Email" name="email" value={email} className={SignupCSS.input} onChange={({ target }) => setEmail(target.value)}></input>
                    </div>

                    <div className={SignupCSS.inputBox}>
                         <input type="password" id="password" className={SignupCSS.input} name="password" value={password} placeholder="Password" onChange={({ target }) => setPassword(target.value)} />
                    </div>

                    <button disabled={isInvalid} className={SignupCSS.signup_btn} type="submit" >Sign Up</button>

                    <div className={SignupCSS.already}>
                         Already have an account? <Link to={"/login"}>Log In</Link>
                    </div>

                    <div className={SignupCSS.need}><Link to="/">Cancel</Link>
                    </div>

               </form>
          </div>
     )
}