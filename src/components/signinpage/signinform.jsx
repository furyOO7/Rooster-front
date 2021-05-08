import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Signinform = (props) => {
	let [formData, setFormData] = useState({
		email: "",
		password: ""
	})
	const onformchangeHandler = (e, type) => {
		switch (type) {
			case "email":
				formData.firstname = e.target.value
				break;
                case "password":
                    formData.password = e.target.value
                    break;
            
			default:	
				break;
		}
        setFormData(formData)
	}
	return (
		<div className="form-container">
			<div style={{textAlign: "center", margin: "5px"}}><h1>Sign In</h1></div>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={(e) => onformchangeHandler(e, "email")}/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" onChange={(e) => onformchangeHandler(e, "password")} />
				</Form.Group>
				<Button variant="primary"  type="submit">
					Login
				</Button>
			</Form>
		</div>
	);
};

export default Signinform;
