import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { welcomeSaga } from './store/actions';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.sendWelcome(this.state.name);
	}

	componentDidMount() {
		this.props.sendWelcome(null);
	}
	
	render() {
		const __greeting = (this.props.greeting) ? <p>{this.props.greeting}</p> : null;
		return (
		  <div className="App">
			<header className="App-header">
			  <form onSubmit={this.handleSubmit}>
				<label htmlFor="name">Enter your name: </label>
				<input
				  id="name"
				  type="text"
				  value={this.state.name}
				  onChange={this.handleChange}
				/>
				<button type="submit">Submit</button>
			  </form>
			  {__greeting}
			</header>
		  </div>
		);
	  }
}

const _mapStoreToProps = (__store) => {
	return {
		greeting : __store.default.greeting
	}
}

const _mapDispatchToProps = (__dispatch) => {
	return {
		sendWelcome : (__name) => __dispatch(welcomeSaga(__name))
	}
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(App);