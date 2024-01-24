import React from 'react'
import './Viewhistory.css'
import { RiSecurePaymentLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdForwardToInbox } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import { SiExpensify } from "react-icons/si";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaNairaSign } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiWorld } from "react-icons/ti";
import { useNavigate } from 'react-router';

const ViewHistory =()=>{
    const Nav = useNavigate ();
return(
 <>
 <div className='Dashboardcon1'>
    <div className='MainDashboardCon1'>

        <div className='RightDashboardCon12'>
            <div className='Headerboard1'>
                <div className='Themename'>
                    <img src="src/assets/download22.jpeg" alt="" />
                    <h4>Expense Tracker </h4>
                </div>
                <div className='Getstarted'>
                    <div className='GetStartedBox'>
                        <p onClick={ () =>Nav ('/Dashboard')}>Dashboard</p>
                    </div>
                </div>

            </div>
            <div className='spacing1'></div>
            <div className='TotalExpens1'>
                <div className='Totalexpenses2'>
                    <div className='TextTotalexpen1'>
                        <h2> Expenses History</h2>
                    
                    </div>
                </div>

            </div>

            
            <div className='Requreditem1'>
                <div className='Totallingexpens'>
                    <div className='myTotalexpens'>
                        <h4>Total Expense =</h4>
                        <FaNairaSign />
                        <h5>1500</h5>
                    </div>
                    
                </div>
                <div className='spaced5'></div>
              <div className='Borderline'>
              <div className='Rightsidereq'>
                    <div className='Linewidthexp'>
                        <div className='Firstline'>
                            <div className='purshased'>
                            <IoBagCheck className='MYbag'/>
                                <div className='Buying'>
                                <p>Bag</p>
                                <FaNairaSign />
                                <h5>1500</h5>
                                <p>23/02/2024</p>
                                </div>
                               
                                
                            </div>
                            <div className='deltethem'>
                            <RiDeleteBin5Line  className='deletthemnow' />
                            </div>

                        </div>
                    </div>
                    <div className='seconline'>
                        <div className='themainsec'>
                            
                            <div className='halfespace'>
                            <TiWorld className='worldspcs' />
                            
                                <div className='Spending'>
                                <p>Bag</p>
                                {/* <FaNairaSign /> */}
                                <h5>1500</h5>
                                <p>23/02/2024</p>

                                </div>
                            </div>
                            <div className='deltethem2'>
                            <RiDeleteBin5Line  className='deletthemnow2' />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
   
            </div>
           
        </div>

     </div>
 </div>
    
    
 </>
)




}

export default ViewHistory