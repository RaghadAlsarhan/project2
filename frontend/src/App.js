import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login/index';
import Test from './components/login/js'
import Register from './components/registration/index'
import DisplayPage from './components/DetailPage/index'


const App = () => {
	return <div>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/job" element={<Dashboard />}/>
			<Route path="/job/:id" element={<DisplayPage />}/>
			<Route path="/user/signin" element={<Login />}/>
			<Route path="/user/register" element={<Register />}/>
		</Routes>
	</div>
};

export default App;
