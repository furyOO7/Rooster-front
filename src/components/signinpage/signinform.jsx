import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { findFormErrors } from '../../utilities/utilityfunction';
const Signinform = (props) => {
	let [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({});
	const onformchangeHandler = (field, value) => {
		setFormData({...formData, [field]:value});
		if (!!errors[field]) setErrors({
			...errors,
			[field]: null
		})
	}
    const submitSigninform =(e) => {
        e.preventDefault();
		debugger

		const newErrors = findFormErrors(formData, 'signin');
		if (Object.keys(newErrors).length > 0) {
			// We got errors!
			setErrors(newErrors)
		} else {
			console.log("here");
			axios({
				method: 'POST',
				url: 'http://localhost:3001/rooster/signin',
				headers: {   "Access-Control-Allow-Origin": "*" },
			}).then(res => {
				console.log(res);
			})
		}
        
    }
	return (
		<div className="form-container">
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
		</div>
	);
};

export default Signinform;
