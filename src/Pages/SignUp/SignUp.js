import React, { useState, useEffect, useContext } from 'react'
import SignupCSS from './Signup.module.css'
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../../Context/Firebase'
import { doesUsernameExist } from '../../UserFunctions/UserFunctions'

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
               <h1>Sign Up</h1>
          </div>
     )
}