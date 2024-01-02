import React, { useState } from "react";
import '../../../Styles/auth.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import 'animate.css';
import { Toaster, toast } from "sonner";
import schoolLogo from '../ApplicationPages/Utils/schoolLogo.png'

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
    const handleTextChange = (value, field) => {
        setSignUp({
            ...signup,
            [field]: value,
        });
        setLogin({
            ...login,
            [field]: value,
        });

    };

    async function handleLogin() {
        try {
            if (!login.email) {
                toast.error('Please fill in your email address ');
            } else if (!login.kcseIndex) {
                toast.error('Please fill in your KCSE Index Number/Year ');
            } else {
                const response = await axios.post('https://b3d0-154-159-237-69.ngrok-free.app/api/login', login);
                const accessToken = response.data;
                localStorage.setItem('accessToken', accessToken);
                // alert(accessToken)

                toast.success(`You are Logged In Successfully`)

                setTimeout(() => {
                    navigation("/application-page");
                }, 3000);

            }

        } catch (error) {
            toast.error('Login Error');
        }

    }

    async function handleSignUp() {
        try {
            if (!signup.email) {
                toast.error('Please fill in your email address ');
            } else if (!signup.kcseIndex) {
                toast.error('Please fill in your KCSE Index Number/Year ');
            } else {
                const response = await axios.post('https://b3d0-154-159-237-69.ngrok-free.app//api/signup', signup);
                const accessToken = response.data;
                localStorage.setItem('accessToken', accessToken);

                toast.success(`You can now begin the registration process`)
                // alert(accessToken)
                setTimeout(() => {
                    navigation("/application-page");
                }, 3000);
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
                    <div className="input-container">
                        <div className="schoolLogo">
                            <img src={schoolLogo} alt="logo" />
                        </div>
                        <h2 className="title">Log In</h2>
                        <label className="input-label">Email</label>
                        <input
                            className="input-field inp"
                            type="text"
                            placeholder="Enter Email"
                            value={login.email}
                            // required 
                            onChange={(event) => handleTextChange(event.target.value, "email")}
                        />


                        <label className="input-label">KCSE Index Number</label>
                        <input
                            className="input-field inp"
                            type="text"
                            placeholder="E.g 41725253026/2019"
                            value={login.kcseIndex}
                            // required 
                            onChange={(event) => handleTextChange(event.target.value, "kcseIndex")}
                        />
                    </div>
                    <div className="footer">
                        <button
                            onClick={handleLogin}>Log In</button>
                    </div>
                </div>
            )}


            {/* signup */}
            {signupSelected && (
                <div className="login signup animate__animated animate__fadeInRight">
                    <div className="input-container">
                        <div className="schoolLogo">
                            <img src={schoolLogo} alt="logo" />
                        </div>
                        <h2 className="title">Sign Up</h2>
                        <label className="input-label">Email</label>
                        <input
                            className="input-field inp"
                            type="text"
                            placeholder="Enter Email"
                            value={signup.email}
                            // required 
                            onChange={(event) => handleTextChange(event.target.value, "email")}
                        />


                        <label className="input-label">KCSE Index Number</label>
                        <input
                            className="input-field inp"
                            type="text"
                            placeholder="E.g 41725253026/2019"
                            value={signup.kcseIndex}
                            // required 
                            onChange={(event) => handleTextChange(event.target.value, "kcseIndex")}
                        />
                    </div>
                    <div className="footer">
                        <button
                            onClick={handleSignUp}>Start</button>
                    </div>
                </div>
            )}

            <Toaster richColors position="top-center" style={{ marginTop: '50px', marginLeft: '60px', zIndex: 5, width: '80%' }} />
        </div>

    );
}

export default SignupLogin;

