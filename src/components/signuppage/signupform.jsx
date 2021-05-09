import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { findFormErrors } from '../../utilities/utilityfunction';
const Signupform = (props) => {
	const { addToast, removeAllToasts } = useToasts();
	let [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({})
	let toasterData = {
		appearance: '',
		autoDismiss: true,
		autoDismissTimeout: 2000

	}
	const onformchangeHandler = (field, value) => {
		setFormData({
			...formData,
			[field]: value
		})
		if (!!errors[field]) setErrors({
			...errors,
			[field]: null
		})
	}
	
	const submitSignupform = (e) => {
		e.preventDefault();
		removeAllToasts()
		const newErrors = findFormErrors(formData);
		if (Object.keys(newErrors).length > 0) {
			// We got errors!
			console.log('newErrors', newErrors);
			setErrors(newErrors)
		} else {
			axios({
				method: 'POST',
				url: 'http://localhost:3001/rooster/signup',
				headers: { "Access-Control-Allow-Origin": "*" },
				data: formData
			}).then(res => {
				if (res.status === 200) {
					toasterData.appearance = 'success'
					addToast('Saved Successfully', toasterData);
					formData = {
					}
					setFormData(formData)
				} else {
					toasterData.appearance = 'error'
					addToast('Error', toasterData);
				}
			}).catch(err => {
				toasterData.appearance = 'error'
				addToast('Error', toasterData);
			})
		}
	}
	return (
		<div className="form-container">
			<div style={{ textAlign: "center", margin: "5px" }}><h1>Sign Up</h1></div>
			<Form>
				<Form.Row>
					<Col>
						<Form.Control placeholder="First name" onChange={(e) => onformchangeHandler('firstname', e.target.value)} isInvalid={!!errors.firstname} required />
						<Form.Control.Feedback type='invalid'>
							{errors.firstname}
						</Form.Control.Feedback>
					</Col>
					<Col>
						<Form.Control placeholder="Last name" onChange={(e) => onformchangeHandler('lastname', e.target.value)} />
					</Col>
				</Form.Row>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={(e) => onformchangeHandler("email", e.target.value)} isInvalid={!!errors.email} required />
					<Form.Control.Feedback type='invalid'>
						{errors.email}
					</Form.Control.Feedback>

					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" onChange={(e) => onformchangeHandler("password", e.target.value)} isInvalid={!!errors.password} required />
					<Form.Control.Feedback type='invalid'>
						{errors.password} </Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control type="password" placeholder="Confirm Password" onChange={(e) => onformchangeHandler("cpassword", e.target.value)} isInvalid={!!errors.cpassword} required />
					<Form.Control.Feedback type='invalid'>
						{errors.cpassword}</Form.Control.Feedback>
				</Form.Group>
				<Button variant="primary" type="submit" onClick={submitSignupform}>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Signupform;
