import React, { useEffect, useState } from 'react'
import FileStructure from '../Components/FileStructure'
import BannerSlide from '../Components/BannerSlide'
import styled from 'styled-components'
import axios from 'axios'
import AOS from 'aos'
import { BiFilter } from "react-icons/bi";
import Filter from '../Components/Filter'
import { Pagination, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';



const EcomHome = () => {
  const [productData, setProductData] = useState([])
  const [checked, setChecked] = useState([])
  const [radio, setRadio] = useState([])
  const [page, setPage] = useState(1)
  const [filterShow, setFilterShow] = useState("navDropHide")

  const getProductLimit = async () => {
    console.log("This is appi ==> ", process.env.REACT_APP_API)
    const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-pagination/${page}`)
    setProductData(data?.products)
  }


  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filter`, { checked, radio })
      setProductData(data?.products)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    AOS.init()
    if (!checked.length || !radio.length) {
      getProductLimit()
    }

    //eslint-disable-next-line
  }, [checked.length, radio.length, page])

  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct()
    }

    //eslint-disable-next-line
  }, [checked, radio])

  return (
    <FileStructure>
      <BannerDiv>
        <BannerSlide />
      </BannerDiv>
      <div className='container'>

        <ProductDiv>

          <div className="homeHeader">
            <h3> How About This Product ? </h3>
            <button className='mainBtn' onClick={() => {
              filterShow === "navDropHide" ? setFilterShow("filterDisplay")
                : setFilterShow("navDropHide")
            }}> Add Filter <BiFilter />  </button>
          </div>

          <div className={filterShow === "navDropHide" ? "navDropHide" : "filterDisplay"}>
            <Filter setProduct={setProductData} checked={checked} setChecked={setChecked}
              radio={radio} setRadio={setRadio} />
          </div>

          <ProductContainer className=''>
            {productData?.map((item) => (
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
          </ProductContainer>

          <PaginationDiv>
            <Stack spacing={2}>
              <Pagination count={10} page={page} onChange={(event, value) => { setPage(value) }} />
            </Stack>
          </PaginationDiv>
        </ProductDiv>
      </div>
    </FileStructure>
  )
}

export default EcomHome

const BannerDiv = styled.div`
  padding: 3rem 0;
  background: var(--Darkblack);
  z-index: 1;
  position:relative;
`

const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;

  div{
    nav{
      position: relative;
    }
  }
`

const ProductDiv = styled.div`

  .homeHeader{

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    h3{
      font-size: 2rem;
      font-weight: 800;
      font-family: var(--font3);
    }
  }
`

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4,minmax(10rem,1fr));
  justify-content : center;
  padding: 1rem 1.5rem;
  grid-gap: 2rem;
  
  @media only screen and (max-width: 1250px) {
    grid-template-columns: repeat(3,minmax(8rem,1fr));

    .productImg{
      height: 15rem;
    }
}
  @media only screen and (max-width: 950px) {
    grid-template-columns: repeat(2,minmax(7rem,1fr));

    .productImg{
      height: 5rem;
    }
}
  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(1,minmax(17rem,15rem));

    .productImg{
      height: 15rem !important;
      width: 15rem !important;
    }
}
  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(1,minmax(16rem,1fr));

    .productImg{
      height: 15rem !important;
      width: 15rem !important;
    }

}
  

@media only screen and (max-width: 330px) {
  .productBox{
    padding: 0 !important;
  }

  .productImg{
    width: 100% !important;
  }
  .productData{
    em{
      font-size: 1.25rem !important;
    }
  }

  .productPrice{
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 250px) {
  grid-template-columns: repeat(1,minmax(10rem,1fr));
}

  .productBox{
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 1rem;

    &:hover{
      .productImg{
        transform : scale(1.1);
      }
    }

  .productImg{
    overflow:hidden;
    padding: 1rem;
    height: 15rem;
    transition: all 200ms ease-out;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .productData{

    padding: 0.25rem 1rem;

    .productPrice{

      font-size: 1rem;
      
      strong{
        font-size: 0.85rem;
        color: #ff204b;
        margin-right: 2rem;
      }
    }

    .prodName{
      font-size:var(--mainFont);
      display: block;
      text-overflow: ellipsis;
      // white-space: nowrap;
      width: 100%;
    }
  }
  
`