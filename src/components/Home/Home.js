/**
 * Created by watcher on 10/15/16.
 */
import React from 'react'
import Slider from 'react-slick'
import 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

const slide1 = require('../../../public/images/slider/0 (6).jpg')
const slide2 = require('../../../public/images/slider/0 (7).jpg')
const slide3 = require('../../../public/images/slider/0 (8).jpg')


class Home extends React.Component {
	render () {
		const sliderSettings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		}
        return (
            <div className='div-home'>
                <Slider {...sliderSettings}>
					<div><img src={slide1} alt='slide-1' /></div>
					<div><img src={slide2} alt='slide-2' /></div>
					<div><img src={slide3} alt='slide-3' /></div>
				</Slider>
            </div>
        )
    }
}

export default Home
