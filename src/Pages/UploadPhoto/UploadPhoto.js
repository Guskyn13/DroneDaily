import React from 'react'
// import UserContext from '../../Context/User'

//Components
import Navbar from '../../Components/Navbar/Navbar'
import Uploader from '../../Components/Uploader/Uploader'
import Footer from '../../Components/Footer/Footer'

export default function UploadPhoto() {
     // const { user } = useContext(UserContext)

     return (
          <div>
               <Navbar />
               <Uploader />
               <Footer />
          </div>
     )
}
