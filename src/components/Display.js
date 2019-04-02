import React, { Component } from 'react';

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <div>{this.props.info}</div>;
	}
}

export default Display;
