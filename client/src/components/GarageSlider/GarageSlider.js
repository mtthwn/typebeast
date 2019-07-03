import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import axios from 'axios';

import SliderCaption from '../GarageSlider/SliderCaption';
import ImageSlider from '../CarSlider/ImageSlider';

import './GarageSlider.scss';

class GarageSliderLogic extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };

  render() {
    return this.props.children({
      ...this.state,
      handleSelect: this.handleSelect
    });
  }
}

const selectCurrentCar = (_id, car) => e => {
  e.preventDefault();
  console.log('here!!', _id, car)
  axios.post('http://127.0.0.1:8081/api/cars/update', {
    _id,
    car
  })
  .then((res) => {
    console.log(res)
  })
  .then(() => {
    alert('Current car changed')
  })
  .catch((e) => {
    console.log(e)
  })
};

export default ({ user }) => {
  const renderCars = user.cars.map(car => {
    return (
      <Carousel.Item>
        <SliderCaption
          selectCurrentCar={selectCurrentCar}
          imgSrc={car.mediumImg}
          car={car}
          user={user}
        />
        <ImageSlider className="CarSlide" src={car.largeImg} />
      </Carousel.Item>
    );
  });
  return (
    <GarageSliderLogic>
      {props => (
        <div className="GarageSlider-container">
          <Carousel
            activeIndex={props.index}
            direction={props.direction}
            onSelect={props.handleSelect}
            indicators={false}
            fade={false}
            controls={true}
            interval="5000"
          >
            {renderCars}
          </Carousel>
        </div>
      )}
    </GarageSliderLogic>
  );
};
