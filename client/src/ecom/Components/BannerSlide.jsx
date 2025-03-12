import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const BannerSlide = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    centerMode:true,
    centerPadding:'2rem',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding:'0rem',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding:'0rem',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding:'0rem',
        }
      }
    ]
  };
  
  return (
    <Carousel {...settings}>
      <div className='ImgDiv' >
        <img src="/banner/1.png" alt="" className='SlideImg' />
      </div>

      <div className='ImgDiv'>
        <img src="/banner/2.png" alt="" className='SlideImg' />
      </div>

      <div className='ImgDiv'>
        <img src="/banner/3.png" alt="" className='SlideImg' />
      </div>

      <div className='ImgDiv'>
        <img src="/banner/4.png" alt="" className='SlideImg' />
      </div>

      <div className='ImgDiv'>
        <img src="/banner/5.png" alt="" className='SlideImg' />
      </div>

      <div className='ImgDiv'>
        <img src="/banner/6.png" alt="" className='SlideImg' />
      </div>


    </Carousel>
  )
}

export default BannerSlide

const Carousel = styled(Slider)`

  overflow: visible;
  margin-top: 4rem;

  .ImgDiv{
    padding: 0 1rem;
    z-index:2;
  }

  .SlideImg{
      width:100%;
      border-radius: 1rem;
  }
      
    ul{
        display:none;
    }

    button{
      height: 5rem;
      width: 5rem;
      text-align:center;

      &:before{
        font-size: 2rem;
      }
    }

    .slick-prev {
      left: 5% !important;
      z-index: 1;
      top: 30%;
    }

    .slick-next {
      right: 5% !important;
      top: 30%;
      z-index: 1;
    }

`