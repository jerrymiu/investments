import React from 'react';

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div>
					<p>Welcome {this.props.name}</p>
				</div>
				<div>
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="index.html">Settings</a></li>
					</ul>
				</div>
			</div>
		);
	}
}
