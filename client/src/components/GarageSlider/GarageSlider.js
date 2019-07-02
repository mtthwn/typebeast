import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';

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

const selectCurrentCar = _id => e => {
  e.preventDefault();
  console.log('here!!', _id);
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
