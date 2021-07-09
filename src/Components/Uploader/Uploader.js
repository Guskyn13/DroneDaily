import React, { useState, useContext } from 'react'
import { firebase, storage } from '../../lib/firebase'
import UserContext from '../../Context/User'
import { v4 as uuid } from 'uuid'
import UploadCSS from './Uploader.module.css'
import ImgUpload from '../../Images/addImageIcon.png'

const Uploader = () => {
     const { user } = useContext(UserContext)
     console.log(user.email)
     const [ imageUrl, setImageUrl ] = useState([])
     const { error, setError } = useState("")
     const types = [ 'image/png', 'image/jpeg' ]
     // const createdAt = timestamp()

     const readingImageUpload = async (e) => {
          const file = e.target.files[0];
          console.log(e)
          const userUid = user.uid
          const userEmail = user.email

          if (!file && !types.includes(file.type)) {
               setError("Not a valid type, JPEG or PNG")
          } else {
               // setError("")
               const id = uuid()
               const storageRef = storage.ref('images').child(userUid).child(id)
               const imageRef = firebase.database().ref('images').child(userUid).child(id)
               const collectionRef = firebase.firestore().collection('images').doc(id)

               await storageRef.put(file)
               storageRef.getDownloadURL().then((url) => {
                    imageRef.set(url)
                    const newState = [ ...imageUrl, { id, url } ]
                    setImageUrl(newState)
                    collectionRef.set({ url, userUid, id, userEmail })
               })
          }
     }

     return (
          <div>
               <div className={UploadCSS.form} >
                    <label for="image">
                         <input type="file" onChange={readingImageUpload} name="image" id="image" className={UploadCSS.upload_input} />
                         <img src={ImgUpload} className={UploadCSS.file_upload} alt="" />
                    </label>
               </div>

               <div className="errors" style={{ height: '100px' }}>
                    {error && <div style={{ color: "red" }}>{error}</div>}
               </div>

          </div>
     )
}

export default Uploader