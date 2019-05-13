import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { updateControls, signUp } from './store/actions';
import * as utils from './utils/utility';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.props.isValid)
		{
			this.props.signUp({name:this.props.name, email:this.props.email, password:this.props.password});
		}
		else
		{
			alert('Please complete the required inputs');
		}
	}

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = utils.updateObject( this.props.controls, {
            [controlName]: utils.updateObject( this.props.controls[controlName], {
                value: event.target.value,
                valid: utils.checkValidity( event.target.value, this.props.controls[controlName].validation ),
                touched: true
            } )
        } );
        this.props.updateControls(updatedControls);
    }
	
	render() {
		return (
		  <div className="App">
			<header className="App-header">
			  <form onSubmit={this.handleSubmit}>
				<label htmlFor="name">Enter your name: </label>
				<input
				  id="name"
				  type="text"
				  onChange={( event ) => this.inputChangedHandler( event, 'name' )}
				/>
				<label htmlFor="name">Enter your email address: </label>
				<input
				  id="email"
				  type="text"
				  onChange={( event ) => this.inputChangedHandler( event, 'email' )}
				/>
				<label htmlFor="pswd1">Enter your password: </label>
				<input
				  id="password1"
				  type="password"
				  onChange={( event ) => this.inputChangedHandler( event, 'password1' )}
				/>
				<label htmlFor="pswd2">Confirm your password: </label>
				<input
				  id="password2"
				  type="password"
				  onChange={( event ) => this.inputChangedHandler( event, 'password2' )}
				/>
				<button type="submit">Submit</button>
			  </form>
			</header>
		  </div>
		);
	  }
}

const _mapStoreToProps = (__store) => {
	return {
		controls	:	__store.default.controls,
		name		:	__store.default.name,
		email		:	__store.default.email,
		password	:	__store.default.password,
		isValid		:	__store.default.isValid,
		signedUp	:	__store.default.signupResponse
	}
}

const _mapDispatchToProps = (__dispatch) => {
	return {
		signUp			:	(__data)	=>	__dispatch(signUp(__data)),
		updateControls	:	(__data)	=> __dispatch(updateControls(__data)),
	}
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(App);