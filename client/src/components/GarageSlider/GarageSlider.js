import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

import CarSliderLogic from '../CarSlider/CarSliderLogic';
import SliderCaption from '../GarageSlider/SliderCaption';
import ImageSlider from '../CarSlider/ImageSlider';

import './GarageSlider.scss';

import nissan from './../../img/nissan_silvia_slide.png';
import porsche from './../../img/porsche.png';

import nissan_sprite from './../../img/gtx_md.png';
import porsche_sprite from './../../img/porsche_md.png';

export default ({ user, selectCurrentCar }) => {
  return (
    <CarSliderLogic user={user}>
      {props => (
        <div className="GarageSlider-container">
          <Carousel
            activeIndex={props.index}
            direction={props.direction}
            onSelect={props.handleSelect}
            indicators={false}
            fade={false}
            controls={true}
            interval="3000"
          >
            <Carousel.Item>
              <SliderCaption
                selectCurrentCar={selectCurrentCar}
                imgSrc={nissan_sprite}
              />
              <ImageSlider className="CarSlide" src={nissan} />
            </Carousel.Item>
            <Carousel.Item>
              <SliderCaption
                selectCurrentCar={selectCurrentCar}
                imgSrc={porsche_sprite}
              />
              <ImageSlider className="CarSlide" src={porsche} />
            </Carousel.Item>
          </Carousel>
          <Button className="GarageSlider-BuyBtn" variant="outline-light">
            Select Car
          </Button>
        </div>
      )}
    </CarSliderLogic>
  );
};
