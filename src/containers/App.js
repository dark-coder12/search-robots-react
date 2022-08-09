import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CardList from '../components/CardList';
import Searcbox from '../components/Searchbox';
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App () {
	
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect(() => {

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {setRobots(users)});

	}, [])

	const onSearchChange = (event) => {

		setSearchfield(event.target.value);
	}

	const filteredRobots = robots.filter(robots =>
	{
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	return !robots.length ? <h1> Loading </h1> :
	(

	<div className ='tc'>
		<h1>RoboFriends</h1>
		<Searcbox searchChange= {onSearchChange}/>
		<Scroll>
		     <ErrorBoundary> 
				<CardList robots={filteredRobots}/>
			 </ErrorBoundary> 
		</Scroll>
	</div>

	);
}


export default App;