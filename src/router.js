/* eslint-disable */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App/App.jsx'
import Home from './components/Home/Home'

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/home',
		component: Home
	}
]

const RouteWithSubRoutes = (route) => (
	<Route path={route.path} render={props => (
		<route.component {...props} routes={route.routes}/>
	)}/>
)

const RouterConfig = () => (
	<Router>
		<App>
			<Switch>
				{routes.map((route, i) => {
					return (route.path) ? <RouteWithSubRoutes key={i} {...route}/> : <Route key={Math.random() * 345} component={route.component}/>
				})}
			</Switch>
		</App>
	</Router>
)

export default RouterConfig
