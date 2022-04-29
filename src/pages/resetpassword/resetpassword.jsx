import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signin/signin.css'
import './resetpassword.css'
import { Checkbox, FormControlLabel } from '@mui/material';
import logo from '../../assets/images/logo.svg'
import { useState } from 'react';
import ForgotPassword from '../forgotpassword/forgotpassword';

function ResetPassword() {
    const passwordPattern = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).{8,}$');

    const [showForgotPass, setShowForgotPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [password, setPassword] = useState({ newPassword: "", confirmPassword: "" });
    const [regexSignInData, setRegexSignInData] = useState({ 
        newPasswordError: false, 
        newPasswordHelperText: "", 
        confirmPasswordError: false, 
        confirmPasswordHelperText: "" });

    const newPasswordInput = (e) => {
        setPassword(previousState => ({ ...previousState, newPassword: e.target.value }))
    }
    const confirmPasswordInput = (e) => {
        setPassword(previousState => ({ ...previousState, confirmPassword: e.target.value }))
    }

    const submit = () => {
        console.log(password.newPassword)
        console.log(password.confirmPassword)
        let newPasswordTest = passwordPattern.test(password.newPassword);
        let confirmPasswordTest = passwordPattern.test(password.confirmPassword);

        newPasswordTest ?
            setRegexSignInData(previousState => ({ ...previousState, passwordError: false, passwordHelperText: "", })) :
            setRegexSignInData(previousState =>
                ({ ...previousState, newPasswordError: true, newPasswordHelperText: password.newPassword.length !== 0 ? "Enter valid password like asdfG@56810" : "Enter password" }))
        confirmPasswordTest ?
            setRegexSignInData(previousState => ({ ...previousState, confirmPasswordError: false, confrimPasswordHelperText: "", })) :
            setRegexSignInData(previousState =>
                ({ ...previousState, confirmPasswordError: true, confirmPasswordHelperText: password.confirmPassword.length !== 0 ? password.confirmPassword !== password.newPassword ? "Password doesn't match" : "Enter valid password like asdfG@56810" : "Enter password" }))
    }

    const toggleForgotPassword = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setShowForgotPass(true);
            setLoading(false);
        }, 1500);
    }

    return (
        <>
            {showForgotPass ? (<ForgotPassword />) : (
                <div className="signin">
                    <div className="signin_content resetpassword_container">
                        {/* {loading && <BarLoader color="#1a73e8" loading={true} heightsize={150} />} */}
                        <div className={`signin_wrapper ${loading && "signin_fade"}`}>
                            <img className="signin_logo forgotpass_img" src={logo} alt="" />
                            <h1 className="signin_title">Change Password</h1>
                            <p className="signin_subtitle">to continue to Gmail</p>
                            <form className="signin_form">
                                <TextField onChange={newPasswordInput} required className="input" id="password" type={checked ? "text" : "password"} label="Password" variant="outlined" helperText={regexSignInData.newPasswordHelperText} error={regexSignInData.newPasswordError} />
                                <TextField onChange={confirmPasswordInput} required className="input" id="password" type={checked ? "text" : "password"} label="Password" variant="outlined" helperText={regexSignInData.confirmPasswordHelperText} error={regexSignInData.confirmPasswordError} />
                                <div className="forgotpassword_checkbox">
                                    <FormControlLabel
                                        
                                        control={
                                            <Checkbox checked={checked} onChange={() => setChecked(!checked)} sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} name="checked" color="primary" />
                                        }
                                        label="Show Password"
                                    />
                                </div>
                                <div className="signin_infotext forgot_password_text">
                                    Not your computer? Use guest mode to sign in privately.
                                    <a href="https://support.google.com/chrome/answer/6130773?hl=en-GB" target="_blank" rel="noreferrer">
                                        Learn More
                                    </a>
                                </div>
                                <div className="signin_buttons_container forgot_password_button">
                                    <Button className="signin_button text_bold" variant="text" onClick={toggleForgotPassword}>Go Back</Button>
                                    <Button className="signin_button" variant="contained" onClick={submit}>Next</Button>
                                </div>
                            </form>
                        </div>
                    </div >
                </div>)}
        </>   
    )
}

export default ResetPassword