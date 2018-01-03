/**
 * Created by watcher on 3/6/17.
 */
import React from 'react'
import { FormControl } from 'react-bootstrap'
import './style.scss'

class AddExample extends React.Component {
	constructor (props) {
		super(props)
		this.state = {}
	}

	render () {
		const { change, handleSubmit } = this.props
		return (
			<div>
				<h2>Add Example</h2>
				<form name='example-form' onChange={change} onSubmit={handleSubmit}>
					<div>
						<label>First Name</label>
						<div>
							<FormControl name="firstName" component="input" type="text" placeholder="First Name"/>
						</div>
					</div>
					<div>
						<label>Last Name</label>
						<div>
							<FormControl name="lastName" component="input" type="text" placeholder="Last Name"/>
						</div>
					</div>
					<div>
						<label>Email</label>
						<div>
							<FormControl name="email" component="input" type="email" placeholder="Email"/>
						</div>
					</div>
					<div>
						<label>Sex</label>
						<div>
							<label><FormControl name="sex" component="input" type="radio" value="male"/> Male</label>
							<label><FormControl name="sex" component="input" type="radio" value="female"/> Female</label>
						</div>
					</div>
					<div>
						<label>Favorite Color</label>
						<div>
							<FormControl name="favoriteColor" component="select">
								<option></option>
								<option value="ff0000">Red</option>
								<option value="00ff00">Green</option>
								<option value="0000ff">Blue</option>
							</FormControl>
						</div>
					</div>
					<div>
						<label htmlFor="employed">Employed</label>
						<div>
							<FormControl name="employed" id="employed" component="input" type="checkbox"/>
						</div>
					</div>
					<div>
						<label>Notes</label>
						<div>
							<FormControl name="notes" component="textarea"/>
						</div>
					</div>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		)
	}
}

export default AddExample
