import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login/index';
import Register from './components/registration/index'
import DisplayPage from './components/DetailPage/index'
import Home from './components/Home/index'
import Applied from './components/applaied/index';
import Header from './components/header';


const App = () => {
	return <div>
		<Header />
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/job" element={<Dashboard />}/>
			<Route path="/job/:id" element={<DisplayPage />}/>
			<Route path="/user/signin" element={<Login />}/>
			<Route path="/user/register" element={<Register />}/>
			<Route path="/user/signin/applied" element={<Applied />}/>
		</Routes>
	</div>
};

export default App;
