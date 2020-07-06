import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes
import Home from '../routes/home';

const App = () => {
	return (
		<div id="app">
			<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&family=Tajawal:wght@500&display=swap" rel="stylesheet" />

			<Router>
				<Home path="/" />
			</Router>
		</div>
	);
}

export default App;
