/**
 * Created by watcher on 2/20/17.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

class Article extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			_id: props.match.params.id || 0,
			article: {}
		}

		this.clickTagHandler = this.clickTagHandler.bind(this)
	}

	componentWillMount () {
		if (!this.state._id) {
			this.props.history.push('/404')
		}
		fetch('/getArticle', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				_id: this.state._id
			})
		}).then(data => (data.json()))
			.then(data => {
				this.setState({article: data[0]})
			})
	}

	clickTagHandler(event) {
		event.preventDefault()
		alert('knock')
	}

	render () {
		let { article } = this.state,
			{ _id, title, description, text, tags } = article || ''
		if (tags) {
			console.log(tags)
			console.log(tags.split(','))
		}
		return (
			<div className='article'>
				<h1 dangerouslySetInnerHTML={htmlEntities(title)}></h1>
				<p className='article-description' dangerouslySetInnerHTML={htmlEntities(description)}></p>
				<div className='article-full-text' dangerouslySetInnerHTML={htmlEntities(text)}></div>
				<div className='article-tags'>
					{tags ? tags.split(',').map(tag => {
						return (
							<a href='#'
							   key={Math.random()}
							   onClick={this.clickTagHandler}
							>{tag.trim()}</a>
						)
					}) : ''}
				</div>
			</div>
		)
	}
}

function htmlEntities (data) {
	return {__html: data}
}

export default Article
