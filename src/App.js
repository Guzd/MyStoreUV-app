import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<Switch>
				<Route path="/" exact component={() => <Home />} />
				<Route path="/store" component={() => <Store />} />
				<Route path="/about" component={() => <About />} />
				<Route path="/contact" component={() => <Contact />} />
			</Switch>
			<hr />
			<Footer />
		</div>
	);
}

export default App;
