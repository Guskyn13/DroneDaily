import React, { useContext, useEffect } from 'react'
import UserContext from '../../Context/User'
import DashboardCSS from './Dashboard.module.css'
import PropTypes from 'prop-types'
// import useUser from '../../Hooks/useUser'
import LoggedInUserContext from '../../Context/LoggedInUser'

//Components
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

export default function Dashboard() {
     const { user } = useContext(UserContext)

     useEffect(() => {
          document.title = "Drone Daily"
     }, [])

     return (
          <LoggedInUserContext.Provider value={{ user }}>
               <Navbar />
               <h2 className={DashboardCSS.h2}>Welcome {user.displayName}</h2>
               <Footer />
          </LoggedInUserContext.Provider>
     )
}

Dashboard.propTypes = {
     user: PropTypes.object.isRequired
}