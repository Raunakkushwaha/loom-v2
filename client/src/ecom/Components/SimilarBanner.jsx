import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SimilarBanner = () => {
    const similarProduct = useSelector((state) => state.similarProduct.value)

    console.log("Similar products ==> : ", similarProduct)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '2rem',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <Carousel {...settings}>
                {similarProduct[0]?.map((item) => (
                    <div key={item?._id} className='productBox' >
                        <Link to={`/ecom/product/${item?.slug}`}>
                            <div className="productImg">
                                <img src={`${process.env.REACT_APP_API}/api/v1/product/get-photo/${item?._id}`} alt="" />
                            </div>
                            <div className="productData">
                                <em className='prodName' > {item?.name} </em>
                                <div className="productPrice">
                                    <strong>10% </strong>
                                    <em> {item?.price} Rs. </em >
                                </div>
                            </div>
                        </Link>

                    </div>
                ))}

            </Carousel >
        </>
    )
}

export default SimilarBanner

const Carousel = styled(Slider)`

  overflow: visible;
  margin-top: 2rem;

  .productImg{
    width: 12rem;
    height: 12rem;

      img{
        width: 100%;
        height: 100%;
      }
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
      left: 2% !important;
      z-index: 1;
      top: 30%;
      
      &::before{
        color: black;
      }
    }

    .slick-next {
      right: 5% !important;
      top: 30%;
      z-index: 1;
    }

`