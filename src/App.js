import AppCss from './App.module.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserContext from './Context/User'
import useAuthListener from './Hooks/useAuthListener'

//Pages
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import Dashboard from './Pages/Dashboard/Dashboard'
import UploadPhoto from './Pages/UploadPhoto/UploadPhoto'

function App() {
     const { user } = useAuthListener()

     return (
          <UserContext.Provider value={{ user }}>
               <Router className={AppCss.App}>
                    <Switch>
                         <Route path='/' exact component={Home} />
                         <Route path='/login' component={Login} />
                         <Route path='/signup' component={SignUp} />
                         <Route path='/forgot-password' component={ForgotPassword} />
                         <Route path='/dashboard' user={user} component={Dashboard} />
                         <Route path='/upload' component={UploadPhoto} />
                    </Switch>
               </Router>
          </UserContext.Provider>
     );
}

export default App;
