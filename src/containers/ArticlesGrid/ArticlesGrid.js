/**
 * Created by watcher on 2/20/17.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const LocalArticle = ({...props}) => {
	let { _id, title, description } = props.article
	return (
		<div className='article-link'>
			<h1><Link to={`/article/${_id}`}>{title}</Link></h1>
			{description}
		</div>
	)
}

class ArticlesGrid extends React.Component {
	constructor(props) {
		super(props)
		this.state = {articles: []}
	}

	componentWillMount() {
		fetch('/getArticles', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(data => {
			return data.json()
		}).then(articles => {
			this.setState({articles})
		}).catch(err => {
			console.log(err)
		})
	}

	render () {
		const { articles } = this.state

		return (
			<div className='articles-grid'>
				{articles.map(article => {
					return (
						<LocalArticle
							key={Math.random() * 234}
							article={article}
						/>
					)
				})}
			</div>
		)
	}
}

export default ArticlesGrid
