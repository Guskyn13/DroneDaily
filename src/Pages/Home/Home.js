import React from 'react'
import HomeCss from './Home.module.css'

//Components
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

//Images
import Logo from '../../Images/Logo.png'
import Wedding from '../../Images/Wedding.png'
import Construction from '../../Images/Construction.png'
import RealEstate from '../../Images/RealEstate.png'
import Roofing from '../../Images/Roofing.png'
import Downtown from '../../Images/Downtown.JPG'
import FerrisWheel from '../../Images/FerrisWheel.JPG'
import Baseball from '../../Images/Baseball.JPG'

export default function Home() {
     return (
          <div className={HomeCss.container}>
               <Header />
               <div className={HomeCss.main_container}>
                    <div className={HomeCss.data}>
                         <img src={Logo} className={HomeCss.logo_img} alt="drone daily logo" />
                         <div className={HomeCss.title}>
                              <h1>Drone <span style={{ color: "hotpink" }}>Daily</span></h1>
                         </div>
                    </div>
               </div>

               <div className={HomeCss.information}>
                    <div className={HomeCss.info_grid}>
                         <div className={HomeCss.info_wrapper}>
                              <img src={Wedding} className={HomeCss.data_icon} alt="" />
                              <p>Find out how drone photography can boost the past experience of that special day.Your wedding day is meant to be special so lets us help you achieve that.</p>
                         </div>

                         <div className={HomeCss.info_wrapper}>
                              <img src={Construction} className={HomeCss.data_icon} alt="construction" />
                              <p>Why risk everything climbing to the top of the construction site just to observe the rate of production. Experience the ability to fly to those tough to reach places to grab an estimate for a timeline of production.</p>
                         </div>

                         <div className={HomeCss.info_wrapper}>
                              <img src={RealEstate} className={HomeCss.data_icon} alt="real estate" />
                              <p>What to display that house you're looking to sell faster than ever? If you're looking to showoff some real estate in an elegant manor we have just what you're looking for</p>
                         </div>

                         <div className={HomeCss.info_wrapper}>
                              <img src={Roofing} className={HomeCss.data_icon} alt="" />
                              <p> Need an estimate on a roof but you've already fallen off once? Don't risk it, let us get up there for you, I'm sure you can find what you're looking for!</p>
                         </div>
                    </div>

                    <div className={HomeCss.image_container}>
                         <div className={HomeCss.image.img1}>
                              <img src={Downtown} className={HomeCss.imgs} alt="downtown" />
                         </div>
                         <div className={HomeCss.image.img2}>
                              <img src={FerrisWheel} className={HomeCss.imgs} alt="ferris wheel" />
                         </div>
                         <div className={HomeCss.image.img3}>
                              <img src={Baseball} className={HomeCss.imgs} alt="rockies stadium" />
                         </div>
                    </div>

               </div>

               <Footer />
          </div>
     )
}
