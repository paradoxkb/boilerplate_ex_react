/**
 * Created by watcher on 2/12/17.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

class Auth extends React.Component {
	constructor () {
		super()
		this.handlerAuth = this.handlerAuth.bind(this)
	}

	handlerAuth (e) {
		const target = e.target.id
		// let username, password
		switch (target) {
			default:
				// username = this.rEmailLogin.value
				// password = this.rPasswordLogin.value
				break
		}
	}

	render () {
		return (
			<div className='row row-auth'>
				<div id='auth_form' className='input-group'>
					<div className='form-group'>
						<label className='col-xs-3'>Login</label>
						<div className='col-xs-9'>
							<input type='text' className='form-control' ref={ref => this.rEmailLogin = ref} placeholder='Email'/>
						</div>
					</div>
					<div className='form-group'>
						<label className='col-xs-3'>Password</label>
						<div className='col-xs-9'>
							<input type='password' className='form-control' ref={ref => this.rPasswordLogin = ref} placeholder='6-dig'/>
						</div>
					</div>
					<div id='login_button_div'>
						<span className='span-register'><Link to='/register'>Register</Link></span>
						{/*<span className='span-restore'><Link to='/restore_password'>I forgot password</Link></span>*/}
						<input type='button' className='btn btn-success' value='Enter' onClick={this.handlerAuth}/>
					</div>
					<span className='auth-border'></span>
					<div className='form-group' onClick={this.handlerAuth}>
						<img src='/images/google_plus.png' alt='google-login' id='google_login'/>
						<img src='/images/facebook.png' alt='facebook-login' id='facebook_login'/>
					</div>
				</div>
			</div>
		)
	}
}

export default Auth