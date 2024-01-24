 import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Wallscreen from './Components/Wallscreen/Wallscreen'
import Login from './Components/Login/Login'
import SignUp from './Components/SignupPage/Signup'
import Dashboard from './Components/Dashboard/Dashboard'
import Viewhistory from './Components/ViewHistory/Viewhistory'

function App() {

  return (
    <HashRouter>
    <Routes>
      <Route path='/' element = {<Wallscreen/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/signUp' element = {<SignUp/>}/>
      <Route path='/dashboard' element = {<Dashboard/>}/>
      <Route path='/Viewhistory' element = {<Viewhistory/>}/>
      {/* <Route path='/' element = {<Dashboard/>}/> */}
      
      
      
      </Routes>
    
    
    
    </HashRouter>
  )
}

export default App
