/**
 * Created by watcher on 2/7/18.
 */
import React from 'react'
const request = require('request')

class Uploader extends React.Component {
    constructor(props) {
        super(props)

        // this.uploadSubmitHandle = this.uploadSubmitHandle.bind(this)
    }

    uploadSubmitHandle(event) {
        event.preventDefault()

        const form = new FormData();
        const file = event.target.file.files[0]
        alert(file.name)
        const url = 'http://localhost:3003/v1/Attachments/photo/upload'
        const headers = {
            Authorization: '2USu2eDlHt4LNXNdBpBfQ8mnR7TzW8vFDbdgFCSYNoE6gBrfLaiMfaM6XF1AyiJJ',
            'Content-Length': file.length,
            "Access-Control-Allow-Origin": "*"
        }
        form.append('file', file)
        console.log('form', form)
        const options = {
            headers,
            form,
        }

        fetch(url, {
            method: 'post',
            headers,
            body: form
        })
            .then(data => {
            console.log('data', data)
        })
            .catch(err => {
                console.log('err', err)
            })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.uploadSubmitHandle}>
                    <input type='file' name='file' />
                    <input type='submit' value='Send'/>
                </form>
            </div>
        )
    }
}

export default Uploader
