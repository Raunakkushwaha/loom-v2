import React, { useEffect, useState } from 'react'
import FileStructure from '../Components/FileStructure'
import { useUser } from '../context/context'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { clearCart, updateCart } from '../Redux/Cart'
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios'

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartProduct = useSelector((state) => state.cartProduct.CartItem)
    
    const user = useSelector((state) => state?.authReducer?.authData);
  
    const [clientToken, setClientToken] = useState("")
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(true)

    const handlePayment = async () => {
        console.log("This is clicked")
        try {
            setLoading(true)
            const { nonce } = await instance.requestPaymentMethod()
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/braintree/payment`, {
                nonce, cartProduct
            })
            console.log("RESSS ==> ", res)
            console.log("First")
            setLoading(false)
            console.log("second")
            alert('success')
            console.log("third")
            dispatch(clearCart())
            navigate("/dashboard/user/orders");

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const handleRemove = (e, pid) => {
        try {
            e.preventDefault()
            let cartItem = [...cartProduct]
            let index = cartProduct.findIndex((item) => item._id === pid);
            cartItem.splice(index, 1)
            dispatch(updateCart(cartItem))
        } catch (error) {
            console.log(error)
        }
    }

    const getToken = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/braintree/token`)
            setClientToken(data?.clientToken)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getToken()
        setLoading(false)
    }, [user?.token])
    return (
        <FileStructure>
            <MyCartDiv>
                <AiOutlineShoppingCart /> {user?.userDetail?.name} Cart
            </MyCartDiv>
            {user?.token ?
                <div className="container">

                    <CartDiv className='cartDiv'>
                        <CartProduct>
                            {cartProduct.length > 0 ? cartProduct?.map((item) => (
                                <div key={item?._id} className='productBox'>
                                    <Link to={`/product/${item?.slug}`}>
                                        <div className="productImg">
                                            <img data-aos="fade-up" data-aos-duration="1000" src={`${process.env.REACT_APP_API}/api/v1/product/get-photo/${item?._id}`} alt="" />
                                        </div>
                                        <div className="productData">
                                            <h3>{item?.name}</h3>
                                            <p> {item?.description} </p>
                                            <div className="productPrice">
                                                <em> Rs.{item?.price} </em >
                                            </div>

                                            <div className="productBtn">
                                                <button className="mainBtn" onClick={(e) => handleRemove(e, item._id)}> Remove Item <AiOutlineDelete /> </button>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            )) : <h1> Sorry!! Your Cart is Empty </h1>}
                        </CartProduct>

                        <CartPayment className='CartPayment'>
                            {!clientToken || !cartProduct?.length ? ("") : (
                                <>
                                    <DropIn
                                        options={{ authorization: clientToken }}
                                        onInstance={(instance) => { setInstance(instance) }}
                                    />

                                    <button className={loading ? `loadBtn` : `mainBtn`}
                                        disabled={!user?.user?.address?.city || loading || !instance}
                                        onClick={handlePayment} > Make Payment </button>
                                </>
                            )}

                        </CartPayment>
                    </CartDiv>

                </div>
                : (<>
                    <h1> Login Please to View Cart </h1>
                </>)}
        </FileStructure>
    )
}

export default Cart

const MyCartDiv = styled.div`
    text-align: center;
    background: linear-gradient(106.23deg, #f99827 0%, #f95f35 100%);
    padding: 6rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color : var(--white);
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-size: 2rem;
    svg path{
        color: white;
    }
`

const CartDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const CartPayment = styled.div`
    flex: 0.6;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    button{
        display: flex;
        justify-content: center;
    }
`

const CartProduct = styled.div`

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