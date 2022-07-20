import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from '../components/CardList';
import Searcbox from '../components/Searchbox';
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component{
	
	constructor(){

		super();
		this.state = {

			robots: [],
			searchfield: ''
		}
	}	

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
		})
			.then(users => {
				this.setState( {robots: users}) ;
			});
	}

	onSearchChange = (event) => {

		this.setState( {searchfield: event.target.value}) ;
	}

	render() {

		const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robots =>
		{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ? <h1> Loading </h1> :
		(

		<div className ='tc'>
			<h1>RoboFriends</h1>
			<Searcbox searchChange= {this.onSearchChange}/>
			<Scroll>
			     <ErrorBoundary> 
					<CardList robots={filteredRobots}/>
				 </ErrorBoundary> 
			</Scroll>
		</div>

		);
	}
}


export default App;