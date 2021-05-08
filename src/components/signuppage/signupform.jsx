import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
const Signupform = (props) => {
	let [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		cpassword: ""
	})
	const onformchangeHandler = (e, type) => {
		switch (type) {
			case "fname":
				formData.firstname = e.target.value
				break;
				case "lname":
				formData.lastname = e.target.value
				break;
				case "email":
				formData.email = e.target.value
				break;
				case "password":
				formData.password = e.target.value
				break;
				case "confirmpassword":
				formData.cpassword = e.target.value
				break;
			default:	
				break;
		}
		setFormData(formData)
	}
	return (
		<div className="form-container">
			<div style={{textAlign: "center", margin: "5px"}}><h1>Sign Up</h1></div>
			<Form>

				<Form.Row>
					<Col>
						<Form.Control placeholder="First name" onChange={(e) => onformchangeHandler(e, "fname")}/>
					</Col>
					<Col>
						<Form.Control placeholder="Last name" onChange={(e) => onformchangeHandler(e, "lname")}/>
					</Col>
				</Form.Row>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={(e) => onformchangeHandler(e, "email")}/>
					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password"  onChange={(e) => onformchangeHandler(e, "password")}/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control type="password" placeholder="Confirm Password"  onChange={(e) => onformchangeHandler(e, "confirmpassword")}/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Signupform;
