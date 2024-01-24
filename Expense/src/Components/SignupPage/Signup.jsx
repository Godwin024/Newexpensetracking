import './Signup.css'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SpinnerCircular } from 'spinners-react'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const SignUp = () => {

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // const handleSignUp = () => { };

    const schema = yup.object().shape({
        Firstname: yup.string().required("your firstname is required"),
        Lastname: yup.string().required("your lastname is required"),
        email: yup.string().email().required("your email is required"),
        phoneNumber: yup.string().matches(/^\d{11}$/, "phoneNumber must be 11 digits").typeError("phoneNumber must be a number").required("PhoneNumber is required "),
        password: yup.string().min(8).max(20).required("password must be a minimum of 8 Characters").required("password is required"),
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
                "https://expensetrack-1fkz.onrender.com/api/v1/createUser",
                data
            );
            console.log(res)

            const userInformation = res.data.data
            localStorage.setItem("userInformation", JSON.stringify({ id: userInformation._id, name: userInformation.userName, email: userInformation.email }))

            nav("/login")
            console.log(userInformation)
            setLoading(false)
        } catch (err) {
            console.log(err, "err message")
            setLoading(false)
        }

    };





    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="MainBody">
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
                    <div className='righsignuppage'>
                        <div className="SignUpContentDownWrap">
                            <div className="SignUpContentDownInitials">
                                <img src="src/assets/download22.jpeg" alt="" />
                                <h1>Expense Tracker</h1>

                            </div>
                            <p>Create an account to get started</p>
                            <div className="SignUpContentDownForm">
                                <div className="SignUpContentDownFormNames">
                                    <div className="SignUpContentDownFormFName">
                                        <div className="SignUpContentDownFormFNameLabels">
                                            <label htmlFor="">First Name</label>

                                        </div>
                                        <div className="SignUpContentDownFormFNameInputs">
                                            <input
                                                type="text"
                                                placeholder="Input First Name"
                                                {...register("Firstname")}

                                            />
                                        </div>
                                        <p>{errors.Firstname?.message}</p>
                                    </div>
                                    <div className="SignUpContentDownFormLName">
                                        <div className="SignUpContentDownFormLNameLabels">
                                            <label htmlFor="">Last Name</label>


                                        </div>
                                        <div className="SignUpContentDownFormLNameInputs">
                                            <input
                                                type="text"
                                                placeholder="Input Last Name"
                                                {...register("Lastname")}


                                            />
                                        </div>
                                        <p>{errors.Lastname?.message}</p>
                                    </div>
                                </div>
                                <div className='spacingly12'></div>
                                <div className="SignUpContentDownFormMail">
                                    <div className="SignUpContentDownFormMailLabels">
                                        <label htmlFor="">Email Address</label>


                                    </div>
                                    <div className="SignUpContentDownFormMailInputs">
                                        <input
                                            type="email"
                                            placeholder="Input Email"
                                            {...register("email")}

                                        />
                                    </div>
                                    {/* <p>{errors.Lastname?.message}</p> */}
                                </div>
                                <div className="SignUpContentDownFormPhone">
                                    <div className="SignUpContentDownFormPhoneLabels">
                                        <label htmlFor="">Phone Number</label>

                                    </div>
                                    <div
                                        className="SignUpContentDownFormPhoneInputs"

                                    >
                                        <div className="SignUpContentDownFormPhoneFlag">
                                            {/* <img src={Flag} alt="" /> <span>+234</span> */}
                                        </div>

                                        <input
                                            type="text"
                                            {...register("phoneNumber")}

                                            placeholder="Input Number"

                                        />
                                    </div>
                                    {/* <p>{errors.Lastname?.message}</p> */}
                                </div>
                                <div className="SignUpContentDownFormPwd">
                                    <div className="SignUpContentDownFormPwdLabels">
                                        <label htmlFor="">Password</label>

                                    </div>
                                    <div
                                        className="SignUpContentDownFormPwdInputs"

                                    >
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Input Password"
                                            {...register("password")}
                                        />
                                        <div
                                            className="SignUpContentDownFormPwdEyes"
                                        >


                                        </div>
                                    </div>
                                    {/* <p>{errors.Lastname?.message}</p> */}
                                </div>
                                {/* <div className="SignUpContentDownFormCPwd"> */}
                                {/* <div className="SignUpContentDownFormCPwdlabels">
                                        <label htmlFor="">Confirm Password</label>

                                    </div> */}
                                {/* <div
                                        className="SignUpContentDownFormcPwdInputs">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Confirm Your Password"

                                        />
                                        <div
                                            className="SignUpContentDownFormPwdEyes"
                                        >

                                            {
                                                showPassword ? (<AiOutlineEye onClick={handleShowPassword} className='AiOutlineEye' />) : (<AiOutlineEyeInvisible className='AiOutlineEyeInvisible' onClick={handleShowPassword} />)
                                            }
                                        </div>
                                    </div> */}
                                {/* <div className='mmmm'>
                          

                                <p>User</p>
                                <input type="checkbox" onChange={() => setUser(!user)} />
                           

                            <p>Admin</p>
                            <input type="checkbox" onChange={() => setAdmin(!admin)} />

                        </div> */}
                                {/* </div> */}
                            </div>
                            <div className='spacingly24'></div>
                            <div className="SignUpContentDownBtn">
                                {loading ? (
                                    <p>loading.......</p>

                                ) : (
                                    <button>SIGN UP</button>

                                )
                                }


                            </div>
                        </div>
                    </div>



                </div>
            </form>
        </>
    )
}

export default SignUp