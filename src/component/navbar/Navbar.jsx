import React from 'react'
import "./navbar.css"
import {useState,useEffect,useRef} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const navRef = useRef()
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [showNav,setShowNav] = useState(true)
  

  const getUser = async () =>{
    try{
      const userInfo = await axios.get('/api/users/me');
      console.log(userInfo.data)
      setUser(userInfo.data);
    }catch (err){
      console.log(err)
      toast.error("cannot get User Info")
    }
    
  }
  
  const handleLogout =  async () => {
    try{
      await axios.post("/api/authen/logout")
      navigate('/auth')
    } catch(err){
      toast.error("Logout fail")
    }
  }

  useEffect(()=>{
    getUser()
  },[])


  return (
		<div className="nav-container grid" ref={navRef}>
			<div className="nav-logo">
				<h2>TO-DO APP</h2>
			</div>
			<div
				className={`${
					showNav ? 'nav-userinfo' : 'nav-userinfo-responsive'
				}`}
			>
				<p className="nav-user-icon">
					<FaUserAlt />
				</p>
				<p className="nav-username">{user.name}</p>
				<Link to="/edit-profile">
					<button type="button" className="nav-button edit">
						Edit Profile
					</button>
				</Link>
				<button
					type="button"
					className="nav-button logout"
					onClick={handleLogout}
				>
					Logout
				</button>
				<button
					className="nac-btn-close"
					onClick={() => setShowNav(true)}
				>
					<FaTimes />
				</button>
			</div>
			<div className="nav-btn-open">
				<i class="bx bx-menu" onClick={() => setShowNav(false)}></i>
			</div>
		</div>
  );
}

export default Navbar