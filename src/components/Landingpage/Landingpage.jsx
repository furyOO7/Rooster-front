import React from 'react';
import Button from 'react-bootstrap/Button';
import './Landingpage.css';
import { Link } from 'react-router-dom';
const LandingPage = (props) => {
	return (
		<div className="landing-container">
            <div className="landing-childcontainer text">
                Welcome to Rooster
            </div>
            {/* <div className="landing-childcontainer"> */}
            <div className="mb-2 landing-childcontainer">
				<Button variant="primary" size="lg" block >
                <Link style={{color: "#FFF"}} to={`/signin`}> Signin</Link>
				</Button>
			</div>
            <div className="mb-2 landing-childcontainer">
				<Button variant="primary" size="lg" block>
                <Link style={{color: "#FFF"}} to={`/signup`}>Signup</Link>
				</Button>
                </div>
            {/* </div> */}
			
		</div>
	);
};

export default LandingPage;
