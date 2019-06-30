import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

import CarSliderLogic from '../CarSlider/CarSliderLogic';
import SliderCaption from '../ShopSlider/SliderCaption';
import ImageSlider from '../CarSlider/ImageSlider';

import './ShopSlider.scss';

import nissan from './../../img/nissan_silvia_slide.png';
import porsche from './../../img/porsche.png';

import nissan_sprite from './../../img/gtx_md.png';
import porsche_sprite from './../../img/porsche_md.png';

export default () => {
  return (
    <CarSliderLogic>
      {props => (
        <div className="ShopSlider-container">
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
              <SliderCaption imgSrc={nissan_sprite} />
              <ImageSlider className="CarSlide" src={nissan} />
            </Carousel.Item>
            <Carousel.Item>
              <SliderCaption imgSrc={porsche_sprite} />
              <ImageSlider className="CarSlide" src={porsche} />
            </Carousel.Item>
          </Carousel>
          <Button className="ShopSlider-BuyBtn" variant="outline-light">
            Buy Now <span className="CarPrice">$5000 Coins</span>
          </Button>
        </div>
      )}
    </CarSliderLogic>
  );
};
