import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='container-fluid'>
				<div className='text-center'>
					<h1>BOILERPLATE</h1>
				</div>
                {this.props.children}
			</div>
		);
  	}
}

export default App
