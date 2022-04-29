import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './forgotpassword.css'
import '../signin/signin.css'
import SignUp from '../signup/signup';
import ResetPassword from '../resetpassword/resetpassword';

function ForgotPassword() {
    const emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');

    const [showSignUp, setShowSignUp] = useState(false);
    const [showResetPassword, setResetPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailId, setEmailId] = useState("");
    const [regexSignInData, setRegexSignInData] = useState({emailError: false, emailHelperText: ""});

    const emailInput = (e) => {
        setEmailId(e.target.value)
    }

    const submit = () => {
        let emailTest = emailIdPattern.test(emailId);
        // eslint-disable-next-line no-lone-blocks
        {
            emailTest ?
                setRegexSignInData(previousState => ({ ...previousState, emailError: false, emailHelperText: "", })) :
                setRegexSignInData(previousState =>
                    ({ ...previousState, emailError: true, emailHelperText: emailId.length !== 0 ? "Enter valid email using letters,numbers & periods" : "Enter email" }))
        }
        if(emailTest) {
            setResetPassword(true)
        }
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
    {showSignUp ? (<SignUp showSignUp={setShowSignUp} />) : (
        <>
        {showResetPassword ? (<ResetPassword />) : (
            <div className="signin">
                <div className="signin_content forgotpassword_container">
                    {/* {loading && <BarLoader color="#1a73e8" loading={true} heightsize={10} />} */}
                    <div className={`signin_wrapper ${loading && "signin_fade"}`}>
                        <img className="signin_logo forgotpass_img" src={logo} alt="" />
                        <h1 className="signin_title forgotpass_title">Password Reset</h1>
                        <p className="signin_subtitle">Enter your email to reset password</p>
                        <form className="signin_form">
                            <TextField onChange={emailInput} required className="input" id="email" type="email" label="Email" variant="outlined" helperText={regexSignInData.emailHelperText} error={regexSignInData.emailError} />
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
        )}   
    </>
    )
}

export default ForgotPassword