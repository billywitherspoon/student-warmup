import Display from './Display.js';
import React, { Component } from 'react';

class InputField extends Component {
	constructor(props) {
		super(props);
		this.state = { input: '' };
	}
	handleStroke = (ev) => {
		this.setState({
			input: ev.target.value
		});
		console.log(ev.key);
	};

	render() {
		return (
			<div>
				<form onKeyUp={this.handleStroke}>
					<input type="text" name="name" />
				</form>
				<Display info={this.state.input} />
			</div>
		);
	}
}

export default InputField;
