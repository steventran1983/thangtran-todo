import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"


const Login = ({ setToggle }) => {
	const navigate = useNavigate()
	const handleLogin = async(e) => {
		e.preventDefault()
		const user = {
			email: e.target.email.value,
			password:e.target.password.value
		}
		console.log(user)
		try{
			await axios.post('/api/authen/login',user)
			navigate('/');			
		}catch(err){
			toast.error("Login Fail")
		}
	}

	return (
		<div className="login-container">
			<div className="login-title">
				<h2>Login Page</h2>
		
			</div>
			<form onSubmit={handleLogin} className="login-form">
				<label htmlFor="email" className="login-label">
					<p className="login-label-name">Email</p>
					<input
						type="email"
						name="email"
						placeholder="Your email address"
						className="form-input"
						require
					/>
				</label>
				<label htmlFor="password" className="login-label">
					<p className="login-label-name">Password</p>
					<input
						type="password"
						name="password"
						placeholder="Your password"
						className="form-input"
						require
					/>
				</label>
				<button type="submit" className="form-submit">
					Login
				</button>
			</form>
			<div className="login-switch">
				<p className="login-description">Not a member?</p>
				<button
					className="login-switch-button"
					onClick={() => setToggle(false)}
				>
					Register
				</button>
			</div>
		</div>
	);
};

export default Login