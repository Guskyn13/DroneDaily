import React from 'react'
import HomeCss from './Home.module.css'

//Components
import Header from '../../Components/Header/Header'

//Images
import Logo from '../../Images/Logo.png'

export default function Home() {
     return (
          <div>
               <Header />
               <div className={HomeCss.main_container}>
                    <div className={HomeCss.data}>
                         <img src={Logo} className={HomeCss.logo_img} alt="drone daily logo" />
                         <div className={HomeCss.title}>
                              <h1>Drone <span style={{ color: "hotpink" }}>Daily</span></h1>
                         </div>
                    </div>
               </div>
          </div>
     )
}
