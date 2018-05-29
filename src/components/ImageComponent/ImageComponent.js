/**
 * Created by watcher on 3/12/18.
 */
import React from 'react'

class ImageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: null
        }
    }

    componentWillMount() {
        const img = new Image()
        // img.src = 'def.png'
        img.src = 'https://media.gettyimages.com/photos/colorful-powder-explosion-picture-id550582551'

        this.setState({ img })
    }

    render() {
        const { img } = this.state
        return (
            <div>
                This image is handled
                <div className='' dangerouslySetInnerHTML={{__html: img}}></div>
                {/*<img src='def.png' alt=""/>*/}
                {/*{img}*/}
            </div>
        )
    }
}

export default ImageComponent

const renderHTML = function() {
    return {
        __html : '<img src="url-to-your-image" />'
    }
}

const renderDang = function() {
    return (
        <div dangerouslySetInnerHTML={this.renderHTML()} />
    );
}