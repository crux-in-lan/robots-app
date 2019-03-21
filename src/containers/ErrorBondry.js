import React, {Component} from 'react';

class ErrorBondry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prop1: val1,
			prop2: val2
		}
	}
	render() {
		const {par1, par2} = this.props;
		const {prop1, prop2} = this.state;
		return (
			<div>
				
			</div>
		)
	}
}

export default ErrorBondry;