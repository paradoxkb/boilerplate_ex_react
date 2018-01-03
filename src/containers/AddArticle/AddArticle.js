/**
 * Created by watcher on 2/22/17.
 */
import React from 'react'
import RichTextEditor from 'react-rte'
import './style.scss'



class AddArticle extends React.Component {
	constructor(props) {
		super(props)
		this.state = {textEditor: RichTextEditor.createEmptyValue()}
		this.onChangeTextEditor = this.onChangeTextEditor.bind(this)
		this.addArticle = this.addArticle.bind(this)
	}

	onChangeTextEditor (value) {
		this.setState({textEditor: value})
		if(this.props.onChangeTextEditor) {
			this.props.onChangeTextEditor(value.toString('html'))
		}
	}

	addArticle (e) {
		const _date = new Date().toUTCString()
		const article = {
			title: this.rFormArticle.title.value,
			description: this.rFormArticle.description.value,
			text: this.state.textEditor.toString('html'),
			tags: this.rFormArticle.tags.value,
			author: this.rFormArticle.author.value,
			type: this.rFormArticle.type.value,
			datePublish: _date.substring(0, _date.length - 4),
			status: this.rFormArticle.status.value,
			image: ''
		}

		fetch('http://localhost:3000/addArticle', {
			method: 'POST',
			body: JSON.stringify(article),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(() => {
			alert('Article was added')
			this.props.history.push('/articles')
		})
		e.preventDefault()
	}

	render () {
		return (
			<div id='add_article'>
				<div>
					<h2>Add new article</h2>
					<form name='article-form' ref={ref => this.rFormArticle = ref} onSubmit={this.addArticle}>
						<div className='form-group'>
							<input type='text' className='form-control' name='title' placeholder='Title'/>
						</div>
						<div className='form-group'>
							<select className='form-control'name='type'>
								<option value='translate'>Translations</option>
								<option value='own'>Own</option>
								<option value='guest'>From guest</option>
							</select>
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' name='tags' placeholder='Tags'/>
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' name='author' placeholder='Author'/>
						</div>
						<div className='form-group'>
							<select className='form-control'name='status'>
								<option value='pending'>Pending</option>
								<option value='live'>Live</option>
								<option value='hold'>Hold</option>
								<option value='old'>Old</option>
							</select>
						</div>
						<div className='form-group'>
							<textarea type='text' className='form-control' name='description' placeholder='Description'></textarea>
						</div>
						<div className='form-group'>
							<RichTextEditor value={this.state.textEditor} onChange={this.onChangeTextEditor} />
						</div>
						<div className='form-group'>
							<input type='submit' className='btn btn-success' value='Add'/>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default AddArticle