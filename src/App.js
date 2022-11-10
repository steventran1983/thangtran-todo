import React from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';
import Authen from './pages/Authen';
import PrivateRoute from './component/privateRoute/PrivateRoute';

function App() {
	return (
			<div>
				<Toaster
					position="top-right"
					toastOptions={{
						style: {
							fontSize: '1.6rem',
						},
					}}
				/>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path="/" element={<Home />} />
						<Route path="/edit-profile" element={<EditProfile />} />
					</Route>
					<Route path="/auth" element={<Authen />} />
				</Routes>
			</div>
	);
}

export default App;
