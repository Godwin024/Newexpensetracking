import React, { useState } from 'react'
import './Dashboard.css'
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

const Dashboard =()=>{
    const Nav = useNavigate ();
    const [expense,setExpense] = useState();
    const [expenseAmount,setExpenseAmount] = useState();
    const [addExpense,setAddExpense] = useState()
    const [myPurchase,setMyPurchase] = useState([])
    const [purchaseTime,setPurchaseTime] = ("")
    const handleExpense = ()=>{
        const purchase = {
            expense:expense,
            expenseAmount: expenseAmount,
            purchaseTime: purchaseTime,
            addExpense: addExpense,
        }
        setMyPurchase([...myPurchase, purchase])
    }
return(
 <>
 <div className='Dashboardcon'>
    <div className='MainDashboardCon'>
    <div className="LeftDashboardCon">
                    <div className='leftimage'>
                        <div className='MainprofileHead'>
                            <div className='ProfileCircleme'>
                            <img src="./godwin.jpg" alt="" />
                            </div>

                        </div>
                        
                        <h4>Godwin</h4>
                        <p>Godwin@gmail.com</p>
                    </div>
                    <div className='templates'>
                        <div className='dashboard'>
                        <FaChartLine />
                        <h4>Dashboard</h4>
                        </div>
                        <div className='cards'>
                        <FaMoneyCheck />
                        <h4 onClick={() => Nav ('/Viewhistory')}>View Expense History</h4>
                        </div>
                        {/* <div className='data'>
                        <FaMoneyBillTrendUp />
                        <h4>Income</h4>
                        </div> */}
                
                        <div className='settings'>
                        <SiExpensify />
                        <h4>Expenses</h4>
                        </div>
                    </div>
                    <div className='space29'>
                    </div>
                    <div className='logoutspace'>
                        <div className='logout'>
                        <MdLogout />
                        <h4>Sign Out</h4>
                        </div>
                    </div>
 
                </div>
        <div className='RightDashboardCon'>
            <div className='Headerboard'>
                <div className='Themename'>
                    <img src="src/assets/download22.jpeg" alt="" />
                    <h4>Expense Tracker </h4>
                </div>
                <div className='Getstarted'>
                    <div className='GetStartedBox'>
                        <p>Getting Started</p>
                    </div>
                </div>

            </div>
            <div className='spacing1'></div>

            <div className='TotalExpens'>
                <div className='Totalexpenses'>
                    <div className='TextTotalexpen'>
                        <h2>Total Expenses:</h2>
                        <FaNairaSign />
                        <h4>50000</h4>
                    </div>
                </div>

            </div>

            
            <div className='Requreditem'>
                <div className='Leftsidereq'>
                    <div className='Reqireditem122'>
                      <div className='itemrequired'>
                        <p> <p> All field are required</p></p>
                      </div>
                    </div>

                    <div className='TheExpensetitle1'>
                        <div className='Allinputmethod'>
                            <div className='Expensetitle'>
                            <input type="text" placeholder='Expense Title' onChange={(e)=>setExpense(e.target.value)}/>
                            </div>
                            <div className='Expensetitle'>
                            <input type="text" placeholder='Expense Amount' onChange={(e)=>setExpenseAmount(e.target.value)}/>
                            </div>
                            <div className='Expensetitle'>
                            <input type="Date" placeholder='Enter Date' onChange={(e)=>setPurchaseTime(e.target.value)}/>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='Category'>
                        <select>
                            <option value="food">food</option>
                            <option value="rice">rice</option>
                            <option value="beans">beans</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className='addarrefrence'>
                        <div className='Addref'>
                            <input type="text" placeholder='Add Expense' onChange={(e)=>setAddExpense(e.target.value)}/>
                        </div>
                    </div>
                    <div className='addexpensesenow'>
                        <div className='ADDEXPENSESE' onClick={handleExpense}>
                            <p>+ Add Expenes</p>
                        </div>
                    </div>
                </div>
                <div className='Rightsidereq'>
                    <div className='Linewidthexp'>
                        <div className='Firstline'>
                            {
                                myPurchase?.map(e=><div className='purshased'>
                                <IoBagCheck className='MYbag'/>
                                    <div className='Buying'>
                                    <p>{e.expense}</p>
                                    <FaNairaSign />
                                    <h5>{e.expenseAmount}</h5>
                                    <p>{e.purchaseTime}</p>
                                    </div>     
                                </div>)
                            }
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
    
    
 </>
)




}

export default Dashboard