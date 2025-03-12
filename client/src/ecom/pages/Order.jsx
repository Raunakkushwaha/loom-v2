import React, { useEffect, useState } from 'react'
import UserDash from './user/UserDash'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import axios from 'axios'

const Order = () => {
  const [order, setOrder] = useState([]);

  const getOrder = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/get-order`);
    console.log(data?.orders)
    setOrder(data?.orders)
  }

  useEffect(() => {
    getOrder();
  }, [])

  return (
    <UserDash>
      <OrderBox>
        <CartProduct>
          {order.length > 0 ? order?.map((item) => (
            <div key={item?._id} className='productBox'>
              <h2> Order At :  {item?.createdAt.split('T')[0]} </h2>

              {item?.products.map((p) => (
                <Link to={`/product/${p?.slug}`} key={p?._id} >
                  <div className="productImg">
                    <img src={`${process.env.REACT_APP_API}/api/v1/product/get-photo/${p?._id}`} alt="" />
                  </div>
                  <div className="productData">
                    <h3>{p?.name}</h3>
                    <p> {p?.description} </p>
                    <div className="productPrice">
                      <em> Rs.{p?.price} </em >
                    </div>
                    <h3> Order Status : {item?.status}</h3>


                  </div>
                </Link>
              ))}

            </div>
          )) : <h1> Sorry!! Your Cart is Empty </h1>}

        </CartProduct>
      </OrderBox>
    </UserDash>
  )
}

export default Order

const OrderBox = styled.div`
  margin: 5rem auto auto 25rem;
  border-radius: 1rem;
  @media only screen and (max-width: 950px) {
    margin: 0 !important;
  }
`

const CartProduct = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .productBox{
    padding: 1rem 2rem;
    border-radius: 1rem;
    a{
      display: flex;
      gap: 2rem;
      padding: 2rem;
      border-radius: 1rem;
      margin-bottom: 1rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      
      &:hover{
        background: var(--blackHover);
      }

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
        overflow: hidden;
        width: 15rem;
        height:15rem;

        img{
          width:100%;
          height: 100%;
        }
      }
    }
  }

`