/**
 * Created by watcher on 2/14/17.
 */
import React from 'react'
import './style.scss'

class Register extends React.Component {
	constructor (props) {
		super(props)
		this.handlerRegister = this.handlerRegister.bind(this)
	}

	handlerRegister () {
		const user = {
			username: this.rEmail.value,
			password: this.rPassword.value
		}
		if(user.password !== this.rPasswordRepeat.value) {
			alert('Password don`t match password repeat')
			return false
		}
	}

	render () {
		return (
			<div className='row row-register'>
				<div id='register_form' className='input-group'>
					<div className='form-group'>
						<label className='col-xs-4'>Email</label>
						<div className='col-xs-8'>
							<input type='text' className='form-control' ref={ref => this.rEmail = ref}/>
						</div>
					</div>
					<div className='form-group'>
						<label className='col-xs-4'>Password</label>
						<div className='col-xs-8'>
							<input type='password' className='form-control' ref={ref => this.rPassword = ref}/>
						</div>
					</div>
					<div className='form-group'>
						<label className='col-xs-4'>Password Repeat</label>
						<div className='col-xs-8'>
							<input type='password' className='form-control' ref={ref => this.rPasswordRepeat = ref}/>
						</div>
					</div>
					<input type='button' className='btn btn-success' value='Register' onClick={this.handlerRegister} />
				</div>
			</div>
		)
	}
}

export default Register
