import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import "./editprofile.css"
import Home from './Home';

const EditProfile = () => {
  const navigate = useNavigate()
  const handleChange = async (e) => {
    e.preventDefault()
    const change = {
      name: e.target.name.value,
      email: e.target.email.value
    }
    try {
      await axios.put('/api/users/me', change);
      toast.success("Your Profile Change")
      navigate('/')
    } catch {
      toast.error("Change fail")
    }
  }

  return (
    <section className="editprofile">
			<div className="editprofile-container">
				<h1 class="editprofile-title"> Edit Profile</h1>
				<form className="editprofile-form" onSubmit={handleChange}>
					<label htmlFor="name" className="edit-label">
						<p className="login-label-name">Name</p>
						<input
							type="text"
							className="form-input"
							name="name"
							required
						/>
					</label>
					<label htmlFor="email" className="edit-label">
						<p p className="login-label-name">
							Email
						</p>
						<input
							className="form-input"
							type="email"
							name="email"
							required
						/>
					</label>
					<button type="submit" className="login-switch-button">
						Submit Change
					</button>
				</form>
			</div>
		</section>
  );
}

export default EditProfile