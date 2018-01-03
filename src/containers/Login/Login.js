/**
 * Created by watcher on 2/12/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'

class Login extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = { loginLevel: context.loginLevel }
		this.handlerLogout = this.handlerLogout.bind(this)
	}

	componentWillMount () {
		if(this.props.loginLevel) {
			this.setState({loginLevel: 1})
		}
	}

	componentWillReceiveProps(nextProps, nextContext) {
		const loginLevel = nextContext.loginLevel
		this.setState({loginLevel})
	}

	handlerLogout () {
		// const history = this.props.history
		// document.location.href = '/home'
	}

	render () {
		let objectToReturn
		if(!this.state.loginLevel === 0 || this.props.userData === undefined) {
			objectToReturn = <div className='login'>
				<Link to='/auth'><img src='../../../public/images/login.png' alt='login' /></Link>
			</div>
		} else {
			let { profile } = this.props.userData
			objectToReturn = <div className='login'>
				<span className='welcome-span'>Welcome {profile.name}</span><img src='/images/logout.png' alt='logout' onClick={this.handlerLogout}/>
			</div>
		}
		return objectToReturn
	}
}

Login.contextTypes = {
	loginLevel: PropTypes.number.isRequired
}

export default Login
