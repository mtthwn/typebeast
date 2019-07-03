import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import instance from './../../lib/axios'
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

const selectCurrentCar = car => e => {
  e.preventDefault();
 
  instance.post('/cars/update', {
    car
  }).then(res => {
    console.log(res);
    alert('Current car updated!');
  }).catch(e => console.log(e));
};

export default ({ user }) => {
  const renderCars = user.cars.map(car => {
    return (
      <Carousel.Item>
        <SliderCaption
          selectCurrentCar={selectCurrentCar}
          imgSrc={car.mediumImg}
          car={car}
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
