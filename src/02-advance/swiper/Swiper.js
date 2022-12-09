import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';


export default class DSwiper extends Component {

  componentDidUpdate() {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: true,
      // 如果需要分页器       
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }


  render() {
    return (
      <div>
        <div className="swiper" style={{
          width: "600px",
          height: "300px"
        }}>
          <div className="swiper-wrapper">
            {this.props.children}
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

        </div>
      </div>
    )
  }
}

