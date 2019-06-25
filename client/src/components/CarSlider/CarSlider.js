import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './CarSlider.scss';
import carSlide1 from './../../../img/car_slider1.jpg';
import carSlide3 from './../../../img/car_slider2.jpg';
import carSlide2 from './../../../img/car_slider3.jpeg';
import carSlide4 from './../../../img/car_slider4.jpeg';

class CarSlider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className="CarSlider-container">
        <div className="CarSlider-content">
          <h5>Realtime Competitive Typing</h5>
          <h1>Type Faster</h1>
          <p>
            Improve your typing skills while competing in fast-paced races with
            up to 5 typers from around the world. Compete against your friends,
            earn new cars, track your scores, and so much more... all for free!
          </p>
        </div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          indicators={false}
          fade={true}
          controls={false}
          interval="3000"
        >
          <Carousel.Item>
            <img className="d-block w-100" src={carSlide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carSlide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carSlide3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carSlide4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarSlider;
