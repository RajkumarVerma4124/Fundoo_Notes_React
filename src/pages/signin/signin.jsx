import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signin.css'
import SignUp from '../signup/signup';
import { Checkbox, FormControlLabel } from '@mui/material';

function SignIn() {
    const emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
    const passwordPattern = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).{8,}$');

    const [showSignUp, setShowSignUp] = useState(false);
    const [showForgotPassword, setForgotPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [signInData, setSignInData] = useState({ emailId: "", password: "" });
    const [regexSignInData, setRegexSignInData] = useState({
        emailError: false,
        emailHelperText: "You can use letters,numbers & periods",
        passwordError: false,
        passwordHelperText: "",

    });

    const emailInput = (e) => {
        setSignInData(previousState => ({ ...previousState, emailId: e.target.value }))
    }
    const passwordInput = (e) => {
        setSignInData(previousState => ({ ...previousState, password: e.target.value }))
    }

    const submit = () => {
        let emailTest = emailIdPattern.test(signInData.emailId);
        let passwordTest = passwordPattern.test(signInData.password);
        
        emailTest ?
            setRegexSignInData(previousState => ({ ...previousState, emailError: false, emailHelperText: "", })) :
            setRegexSignInData(previousState =>
                ({ ...previousState, emailError: true, emailHelperText: signInData.email.length !== 0 ? "Enter valid email using letters,numbers & periods" : "Enter email" }))
        
        passwordTest ?
            setRegexSignInData(previousState => ({ ...previousState, passwordError: false, passwordHelperText: "", })) :
            setRegexSignInData(previousState =>
                ({ ...previousState, passwordError: true, passwordHelperText: signInData.password.length !== 0 ? "Enter valid password like asdfG@56810" : "Enter password" })) 
    }

    const toggleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setShowSignUp(true);
            setLoading(false);
        }, 1500);
    }

    return (
        <>
            {showSignUp ? (<SignUp showSignUp={setShowSignUp}/>) : (
                <div className="signin">
                    <div className="signin_content">
                        {/* {loading && <BarLoader color="#1a73e8" loading={true} heightsize={150} />} */}
                        <div className={`signin_wrapper ${loading && "signin_fade"}`}>
                            <img className="signin_logo" src={logo} alt="" />
                            <h1 className="signin_title">Sign in</h1>
                            <p className="signin_subtitle">to continue to Gmail</p>
                            <form className="signin_form">
                                <TextField onChange={emailInput} required className="input" id="email" type="email" label="Email" variant="outlined" helperText={regexSignInData.emailHelperText} error={regexSignInData.emailError} />
                                <TextField onChange={passwordInput} required className="input" id="password" type={checked ? "text" : "password"} label="Password" variant="outlined" helperText={regexSignInData.passwordHelperText} error={regexSignInData.passwordError} />
                                <div className="forgot_text">
                                    <a href="https://support.google.com/chrome/answer/6130773?hl=en-GB">
                                        Forgot Password?
                                    </a>
                                    <FormControlLabel
                                        className="checkbox_input"
                                        control={
                                            <Checkbox checked={checked} onChange={() => setChecked(!checked)} sx={{ '& .MuiSvgIcon-root': { fontSize: 25} }} name="checked" color="primary" />
                                        }
                                        label="Show Password"
                                    />
                                </div>
                                <div className="signin_infotext">
                                    Not your computer? Use guest mode to sign in privately.
                                    <a href="https://support.google.com/chrome/answer/6130773?hl=en-GB" target="_blank" rel="noreferrer">
                                        Learn More
                                    </a>
                                </div>
                                <div className="signin_buttons_container">
                                    <Button className="signin_button text_bold" variant="text" onClick={toggleSignUp}>Create Account</Button>
                                    <Button className="signin_button" variant="contained" onClick={submit}>Next</Button>
                                </div>
                            </form>
                        </div>
                    </div >
                </div>)} 
        </>   
    )
}

export default SignIn