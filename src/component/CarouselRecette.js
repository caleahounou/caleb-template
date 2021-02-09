import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselRecette extends Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src="https://images.unsplash.com/photo-1562707786-7d2b807961c4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src="https://images.unsplash.com/photo-1530260626688-048279320445?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
      );
  }
}
export default CarouselRecette;