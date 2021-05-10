import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { findFormErrors, setCookie } from '../../utilities/utilityfunction';
import { useToasts } from 'react-toast-notifications';
const Signinform = (props) => {
	const { addToast, removeAllToasts } = useToasts();
	let [formData, setFormData] = useState({});
	let [isLoggedIn, setIsLoggedIn] = useState(false);
	const [errors, setErrors] = useState({});
	const onformchangeHandler = (field, value) => {
		setFormData({...formData, [field]:value});
		if (!!errors[field]) setErrors({
			...errors,
			[field]: null
		})
	}
	let toasterData = {
		appearance: '',
		autoDismiss: true,
		autoDismissTimeout: 2000
	}
    const submitSigninform =(e) => {
        e.preventDefault();
		const newErrors = findFormErrors(formData, 'signin');
		if (Object.keys(newErrors).length > 0) {
			// We got errors!
			setErrors(newErrors)
		} else {
			axios({
				method: 'POST',
				url: 'http://localhost:3001/rooster/signin',
				headers: {   "Access-Control-Allow-Origin": "*" },
				data: formData
			}).then(res => {
				if(res.status === 200 && res.data.result.length){
					toasterData.appearance = 'success'
					addToast(res.data.message, toasterData);
					setCookie("rooster-auth-token", 'bearer-'+res.data.token, 1);
					if(res.data.auth)
					setIsLoggedIn(true)
				}else{
					toasterData.appearance = 'error'
					addToast(res.data.message, toasterData);
				}
			}).catch(err => {
				toasterData.appearance = 'error'
				addToast(err.message, toasterData);
			})
		}
        
    }
	return (
		<React.Fragment>
		{isLoggedIn ? <div>Welcome to dashboard</div> : <div className="form-container">
		<div style={{textAlign: "center", margin: "5px"}}><h1>Sign In</h1></div>
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" onChange={(e) => onformchangeHandler("email", e.target.value)} isInvalid={errors.email}/>
				<Form.Control.Feedback type='invalid'>
						{errors.email}
					</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" onChange={(e) => onformchangeHandler("password", e.target.value)} isInvalid={errors.password}/>
				<Form.Control.Feedback type='invalid'>
						{errors.password}
					</Form.Control.Feedback>
			</Form.Group>
			<Button variant="primary"  type="submit" onClick={submitSigninform}>
				Login
			</Button>
		</Form>
	</div>}
	</React.Fragment>
	);
};

export default Signinform;
