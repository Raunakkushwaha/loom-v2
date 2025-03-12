import React, { useEffect, useState } from 'react'
import FileStructure from '../Components/FileStructure'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Pagination, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { BiStore } from 'react-icons/bi'
import { addCart } from '../Redux/Cart'

const Search = () => {
  const similarProduct = useSelector((state) => state.searchProduct.value)
  const dispatch = useDispatch()
  const [searchItem, setSearchItem] = useState([]);
  const [page, setPage] = useState(1)

  const getProductLimit = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/search/${page}/${similarProduct}`)
    setSearchItem(data?.searchResult)
  }

  useEffect(() => {
    getProductLimit()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getProductLimit()
    // eslint-disable-next-line
  }, [page])
  return (
    <FileStructure>
      <div className="container">
        <SearchProduct>
          {searchItem?.map((item) => (
            <div key={item?._id} className='productBox' >
              <Link to={`/product/${item?.slug}`}>
                <div className="productImg">
                  <img data-aos="fade-up" data-aos-duration="1000" src={`${process.env.REACT_APP_API}/api/v1/product/get-photo/${item?._id}`} alt="" />
                </div>
                <div className="productData">
                  <h3>{item?.name}</h3>
                  <p> {item?.description} </p>
                  <div className="productPrice">
                    <em> {item?.price} Rs. </em >
                  </div>

                  <div className="productBtn">
                    <button className="mainBtn" onClick={(e) => {
                      e.preventDefault()
                      dispatch(addCart(item))
                    }} > Add to Cart <BsCart3 /> </button>
                    <button className="mainBtn"> Buy Now <BiStore /> </button>
                  </div>
                </div>
              </Link>

            </div>
          ))}
        </SearchProduct>

        <PaginationDiv>
          <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={(event, value) => { setPage(value) }} />
          </Stack>
        </PaginationDiv>
      </div>
    </FileStructure>
  )
}

export default Search

const SearchProduct = styled.div`

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .productBox{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1rem 2rem;
    border-radius: 1rem;
    a{
      display: flex;
      gap: 2rem;

      .productData{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }

      .productBtn{

        .mainBtn{
          font-size: 1rem;
        }
        padding: 0.5rem;
        display:flex;
        gap: 1rem;
    }

      h3{
        font-size: var(--mainFont);
      }

      .productImg{
        border-radius: 1rem;
        width: 15rem;
        overflow: hidden;
        height:15rem;

        img{
          width:100%;
          height: 100%;
        }
      }
    }
  }

`

const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
`