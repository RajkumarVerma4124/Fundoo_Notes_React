import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import account from '../../assets/images/account.svg';
import './signup.css'
import { createAPIEndpoint, ENDPOINTS } from '../../services/userservice'

function SignUp({showSignUp}) {
   
    const namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    const emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
    const passwordPattern = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).{8,}$');

    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [signUpData, setSignUpData] = useState({ firstName: "", lastName: "", emailId: "", password: "" });
    const [regexSignUpData, setRegexSignUpData] =   useState({
        firstNameError: false,
        firstNameHelperText: "",
        lastNameError: false,
        lastNameHelperText: "",
        emailError: false,
        emailHelperText: "You can use letters,numbers & periods",
        passwordError: false,
        passwordHelperText: "",

    });

    const firstNameInput = (e) => {
        setSignUpData(previousState => ({ ...previousState, firstName: e.target.value }))
    }
    const lastNameInput = (e) => {
        setSignUpData(previousState => ({ ...previousState, lastName: e.target.value }))
    }
    const emailInput = (e) => {
        setSignUpData(previousState => ({ ...previousState, emailId: e.target.value }))
    }
    const passwordInput = (e) => {
        setSignUpData(previousState => ({ ...previousState, password: e.target.value }))
    }

    const submit = () => {
        let firstNameTest = namePattern.test(signUpData.firstName);
        let lastNameTest = namePattern.test(signUpData.lastName);
        let emailTest = emailIdPattern.test(signUpData.emailId);
        let passwordTest = passwordPattern.test(signUpData.password);
        
        firstNameTest ? 
        setRegexSignUpData(previousState => ({ ...previousState, firstNameError: false, firstNameHelperText: "", })) : 
        setRegexSignUpData(previousState => 
            ({ ...previousState, firstNameError: true, firstNameHelperText: signUpData.firstName.length !== 0 ? signUpData.firstName.length > 2 ? "First letter caps" : "Minimum three characters": "Enter first name" }))
    
        lastNameTest ?
                setRegexSignUpData(previousState => ({ ...previousState, lastNameError: false, lastNameHelperText: "", })) :
                setRegexSignUpData(previousState =>
                    ({ ...previousState, lastNameError: true, lastNameHelperText: signUpData.lastName.length !== 0 ? signUpData.lastName.length > 2 ? "First letter caps" : "Minimum three characters" : "Enter last name" }))
        
        emailTest ?
                setRegexSignUpData(previousState => ({ ...previousState, emailError: false, emailHelperText: "You can use letters,numbers & periods", })) :
                setRegexSignUpData(previousState =>
                    ({ ...previousState, emailError: true, emailHelperText: signUpData.email.length !== 0 ? "Enter valid email" : "Enter email" }))
        
        passwordTest ?
                setRegexSignUpData(previousState => ({ ...previousState, passwordError: false, passwordHelperText: "", })) :
                setRegexSignUpData(previousState =>
                    ({ ...previousState, passwordError: true, passwordHelperText: signUpData.password.length !== 0 ? "Enter valid password like asdfG@56810" : "Enter password" }))

        if (passwordTest === true && emailTest === true && lastNameTest === true && firstNameTest === true) {
            createAPIEndpoint(ENDPOINTS.SIGNUP, signUpData).then((res) => console.log(res)).catch((err) => console.log(err))
            // signup(signUpData)
            // console.log(signup(signUpData))
        } 
    }

    const toggleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            showSignUp(false);
            setLoading(false);
        }, 1500);
    }
    return (
        <div className="signup_main">
            <div className="signup_container">
                <div className={`signup ${loading && "signin_fade"}`}>
                    {/* {loading && <BarLoader color="#1a73e8" loading={true} heightsize={150} />} */}
                    {/* <div className="login_ loading signup_loading"/> */}
                    <div className="signup_container">
                        <div className="signup_left">
                            <img className="signin_logo" src={logo} alt="" />
                            <h1 className="signup_header">Create Your Fundoo Account</h1>
                            <p className="signup_subheader">to continue To Fundoo</p>
                            <div className="signup_inputfields">
                                <div className="signup_nameinputs">
                                    <TextField onChange={firstNameInput} className="name_input" size="small" id="firstname" type="text" label="First name" variant="outlined" helperText={regexSignUpData.firstNameHelperText} error={regexSignUpData.firstNameError} />
                                    <TextField onChange={lastNameInput} className="" size="small" id="lastname" type="text" label="Last name" variant="outlined" helperText={regexSignUpData.lastNameHelperText} error={regexSignUpData.lastNameError} />
                                </div>
                                <TextField onChange={emailInput} fullWidth className="email_input" id="email" size="small" type="email" label="Email" variant="outlined" helperText={regexSignUpData.emailHelperText} error={regexSignUpData.emailError}  />
                                <div className="signup_inputpassword">
                                    <div className="signup_passwordWrapper">
                                        <TextField onChange={passwordInput} required className="password_input" size="small" id="password" type={checked ? "text" : "password"} label="Password" variant="outlined" error={regexSignUpData.passwordError} />
                                        <TextField onChange={passwordInput} required className="" size="small" id="password" type={checked ? "text" : "password"} label="Confirm" variant="outlined" error={regexSignUpData.passwordError} />
                                    </div>
                                    {!regexSignUpData.passwordError ? <p className="signup_helpertext">Use 8 or more characters with a mix of letters, numbers & symbols</p> : <p className="signup_helpertext signup_helpertext_error">{regexSignUpData.passwordHelperText}</p> }
                                    <FormControlLabel
                                        className="checkbox_input"
                                        control={
                                            <Checkbox className="signup_checkbox" checked={checked} onChange={()=>setChecked(!checked)} name="checked" color="primary" />
                                        }
                                        label="Show Password"
                                    />
                                </div>
                                <div className="signup_buttons_container">
                                    <Button className="signup_button text_bold" variant="text" onClick={toggleSignUp}>Sign in instead</Button>
                                    <Button className="signup_button" variant="contained" onClick={submit}>Create</Button>
                                </div>
                            </div>
                        </div>
                        <div className="signup_figure">
                            <img className="signup_figureImg"
                                src={account}
                                alt="account"
                            />
                            <div className="signup_figurecaption">
                                One account. All of Google working for you
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp