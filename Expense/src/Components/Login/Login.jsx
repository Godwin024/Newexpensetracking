import './Login.css'
// import { BsBank } from "react-icons/bs";
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Login =()=>{
   const nav = useNavigate();
   const [loading, setLoading] = useState(false);

   const schema = yup.object().shape({
      
      email: yup.string().email().required("Your email is Required"),
      password: yup.string().min(8).max(20).required("Password must be a minimum of 8 Characters"),
  })
  const { register,
      handleSubmit,
      formState: { errors },
  } = useForm({
      resolver: yupResolver(schema),
  });
 

   const onSubmit = async (data) => {

      try {
          setLoading(true);
          const res = await axios.post(
              "https://expensetrack-1fkz.onrender.com/api/v1/login",
              data
          );
          console.log(res)
          const userInformation = res.data.data
          localStorage.setItem("userInformation", JSON.stringify({ id: userInformation._id, name: userInformation.userName, email: userInformation.email }))

          nav("/dashboard")
          console.log(userInformation)
          setLoading(false)
      } catch (err) {
          console.log(err, "err message")
          setLoading(false)
      }

  };


return(
     <>
     <form onSubmit={handleSubmit(onSubmit)}>
         
        <div className='Loginpagecon'>
         <div className='leftLoginpage'>
            <div className='financeprofile'>
               <div className='financeprofilecircle'>
                  <img src="src/assets/download22.jpeg" alt="" />
               </div>
               <h6>Expense Tracker</h6>
            </div>
            <div className='Yourfinancein'>
               <div className='Financeyourown'>
                  <h1>Your Expense </h1> <h1>in one place</h1>
               </div>
            </div>
            <div className='Middlefinanceown'>
               <img src="public/expensetracker.png" alt="" />
            </div>
            <div className='lastfinanceown'>
               <div className='lastfinancetext'>
               <h5>Dive into reports, build budgets and enjoy our </h5>
               <h5> automatic categorization on your expenses.</h5>
               <div className='financetexts'>
               <h5>Learn more about how Expense Tracker works</h5>
               </div>
               </div>
               <div className='myimagefinance'></div>
               
            </div>
         </div>
         <div className='rightLoginpage'>
         <div className='LoginmainCon'>
            <div className='Loginwrapp'>
               <div className='CurvePaylogo'>
                  <img src="src/assets/download22.jpeg" alt="" />
                    {/* <BsBank className='Bankhouse'/> */}
                    <h3>EXPENSE TRACKER</h3>
                    </div>
                   <div className='Logotext'> <p>LOG IN TO</p>  <h3> DASHBOARD</h3></div>
                 <div className='Loginemail'>
                <p>Email address</p>
               <input type="text" placeholder='Enter email' {...register("email")} />
            </div>
            <p>{errors.email?.message}</p>
            <div className='Loginpassword'>
                <p>Password</p>
                  <input type="text" placeholder='Enter password' {...register("password")} />
                   </div>
                   <p>{errors.password?.message}</p>
                   
                    <div className='LOginbtn'>
                     <button>LOGIN</button>
                      <div className='space042'></div>
                     <div className='Donthvaccount'>
                        <div className='Donthvacces'>
                           <Link to="/signup">
                           <p>Don't have an account?</p> <span>Sign up</span>
                           </Link>
                           
                        </div>
                     </div>
                     </div>
                    
                     </div>
                      </div>
            
         </div>
  
            </div>
     </form>
        
        
     </>
)
}

export default Login