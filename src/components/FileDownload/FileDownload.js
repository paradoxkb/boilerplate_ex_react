/**
 * Created by watcher on 5/29/18.
 */
import React from 'react'

function showFile(blob) {
    // It is necessary to create a new blob object with mime-type explicitly set
    // otherwise only Chrome works like it should
    var newBlob = new Blob([blob], {type: "application/pdf"})
console.log('newb', newBlob)
    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
    }

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(newBlob);
    var link = document.createElement('a');
    link.href = data;
    link.download="file.pdf";
    link.click();
}


class FileDownload extends React.Component {
    constructor(props) {
        super(props)

        this.downloadPdfHandle = this.downloadPdfHandle.bind(this)
    }

    async downloadPdfHandle() {
        const headers = new Headers();
        const link = 'http://localhost:3001/api/v1/projects/1/getPdf'
        const token = 'EjaMqnU4gwcCngfZ2wUsyhjpEiz1bZzWH1wRJrX2filfwtJUDDoxBvIxV3qGjTAs'

        headers.append('Authorization', token);

        await fetch(
            link,
            {
                method: 'get',
                headers
            }
        ).then(res => {
            console.log('res', res)
            res.blob().then(data => {
                showFile(data)
            })
        })
    }

    render() {
        return (
            <div>
                <input type='button' value='Download pdf' onClick={this.downloadPdfHandle} />
            </div>
        )
    }
}

export default FileDownload
