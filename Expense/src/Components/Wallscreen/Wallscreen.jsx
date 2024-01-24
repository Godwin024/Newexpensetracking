import  React from 'react'
import './Wallscreen.css'
import {useNavigate} from "react-router-dom"






const Wallscreen = () => {

    const Nav = useNavigate();
  return(
    <div className='frame'>
      <div className='Mainframe'>
      <div className="wrap">
            <div className="mobile">
                
                
                <h1>Expense<span>Tracker</span></h1>

                <h5 style={{paddingTop: "20px"}}>Manage your daily expenses efficiently.</h5>
                <div className='btn'>
                <button onClick={()=>Nav('/Login')}>Explore</button>
            </div>
            </div>

            
        </div>
       
        
      </div>

    </div>
  )
}



export default Wallscreen