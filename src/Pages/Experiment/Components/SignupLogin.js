import React, { useState } from "react";
import '../../../Styles/auth.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import 'animate.css';
import { Toaster, toast } from "sonner";
import schoolLogo from '../ApplicationPages/Utils/schoolLogo.png'
// import basePath from "../../../Utilities/axios";
import basePath from "../../../Utilities/axios";

function SignupLogin() {
    const [signupSelected, setSignupSelected] = useState(false);
    const [loginSelected, setSLoginSelected] = useState(true);

    const signUpStyle = {
        background: signupSelected ? "#ff4870" : "",

    }
    const loginStyle = {
        background: loginSelected ? "#ff4870" : "",

    }
    const [signup, setSignUp] = useState({
        email: "",
        kcseIndex: "",
    })
    const [login, setLogin] = useState({
        email: "",
        kcseIndex: "",
    })

    const navigation = useNavigate()
    const handleTextChange = (value, field, formType) => {
        if (formType === 'signup') {
            setSignUp({
                ...signup,
                [field]: value,
            });
        } else if (formType === 'login') {
            setLogin({
                ...login,
                [field]: value,
            });
        }

    };

    async function handleLogin(e) {
        e.preventDefault();
        try {
            if (!login.email) {
                toast.error('Please fill in your email address ');
            } else if (!login.kcseIndex || !login.kcseIndex.includes('/')) {
                toast.error('Please fill in your correct KCSE Index Number/Year ');
            } else {
                // const response = apiCall.post('/login',login);
                const response = await axios.post(`${basePath}/api/login`, login);
                if (response.data.error) {
                    toast.error('User does not exist');
                } else {
                    const accessToken = response.data;
                    localStorage.setItem('accessToken', accessToken);
                    // alert(accessToken)

                    toast.success(`You are Logged In Successfully`)

                    setTimeout(() => {
                        navigation("/application-page");
                    }, 1500);

                }

            }

        } catch (error) {
            toast.error('Login Error');
        }

    }

    async function handleSignUp(e) {
        e.preventDefault();
        try {
            if (!signup.email) {
                toast.error('Please fill in your email address ');
            } else if (!signup.kcseIndex || !signup.kcseIndex.includes('/')) {
                toast.error('Please fill in your correct KCSE Index Number/Year ');
            } else {
                // const response = apiCall.post('/signup',signup);
                const response = await axios.post(`${basePath}/api/signup`, signup, {
                    headers: {
                        'ngrok-skip-browser-warning': "ngrokSkipBrowserWarningValue",
                    }
                });
                if (response.data.type === "email") {
                    toast.error('User with this email already exists');
                    return;
                } else if (response.data.type === "kcseIndex") {
                    toast.error('Incorrect KCSE Index');
                    return;
                } else {
                    const accessToken = response.data;
                    // alert(accessToken);
                    localStorage.setItem('accessToken', accessToken);
                    if (!accessToken || accessToken == undefined) {
                        alert("Error signing you up, contact support");
                        navigation('/loginpage')
                    } else {
                        toast.success(`You can now begin the registration process`)
                        // alert(accessToken)
                        setTimeout(() => {
                            navigation("/application-page");
                        }, 1500);
                    }
                }

            }

        } catch (error) {
            // alert("Sign Up couldn't be completed Now. Try again later: ", error);
            toast.error("Sign Up couldn't be completed Now. Try again later");
        }

    }

    function handleNewUser() {
        setSignupSelected(true);
        setSLoginSelected(false);
    }
    function handleExistingUser() {
        setSignupSelected(false);
        setSLoginSelected(true);
    }

    return (
        <div className="auth">
            <div className="buttonSelect">
                <div className="loginBtn"
                    style={loginStyle}
                    onClick={handleExistingUser}
                >Login</div>
                <div className="signUpBtn"
                    style={signUpStyle}
                    onClick={handleNewUser}
                >Sign Up</div>
            </div>
            {/* login */}
            {loginSelected && (
                <div className="login animate__animated animate__fadeInLeft" >
                    <form onSubmit={handleLogin}>
                        <div className="input-container">
                            <div className="schoolLogo">
                                <img src={schoolLogo} alt="logo" />
                            </div>
                            <h2 className="title">Log In</h2>
                            <label className="input-label">Email</label>
                            <input
                                className="input-field inp"
                                type="email"
                                placeholder="Enter Email"
                                value={login.email}
                                required
                                onChange={(event) => handleTextChange(event.target.value, "email", "login")}
                            />


                            <label className="input-label">KCSE Index Number</label>
                            <input
                                className="input-field inp"
                                type="text"
                                placeholder="E.g 41725253026/2019"
                                value={login.kcseIndex}
                                minLength="16"
                                maxLength="16"
                                required
                                onChange={(event) => handleTextChange(event.target.value, "kcseIndex", "login")}
                            />
                        </div>
                        <div className="footer">
                            <button
                                type="submit"

                            // onClick={handleLogin}
                            >Log In</button>
                        </div>
                    </form>
                </div>
            )}


            {/* signup */}
            {signupSelected && (
                <div className="login signup animate__animated animate__fadeInRight">
                    <form onSubmit={handleSignUp}>
                        <div className="input-container">
                            <div className="schoolLogo">
                                <img src={schoolLogo} alt="logo" />
                            </div>
                            <h2 className="title">Sign Up</h2>
                            <label className="input-label">Email</label>
                            <input
                                className="input-field inp"
                                type="email"
                                placeholder="Enter Email"
                                value={signup.email}
                                required
                                onChange={(event) => handleTextChange(event.target.value, "email", "signup")}
                            />


                            <label className="input-label">KCSE Index Number</label>
                            <input
                                className="input-field inp"
                                type="text"
                                placeholder="E.g 41725253026/2019"
                                value={signup.kcseIndex}
                                minLength="16"
                                maxLength="16"
                                required
                                onChange={(event) => handleTextChange(event.target.value, "kcseIndex", "signup")}
                            />
                        </div>
                        <div className="footer">
                            <button
                                type="submit"
                            // onClick={handleSignUp}
                            >Start</button>
                        </div>
                    </form>
                </div>
            )}

            <Toaster richColors position="top-center" style={{ marginTop: '50px', marginLeft: '60px', zIndex: 5, width: '80%' }} />
        </div>

    );
}

export default SignupLogin;

