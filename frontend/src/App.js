import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login/index';
import Test from './components/login/js'
import Register from './components/registration/index'


const App = () => {
	return <div>
		{/* <Login /> */}
		<Dashboard />
		{/* <Register /> */}
		{/* <Test /> */}
	</div>
};

export default App;
