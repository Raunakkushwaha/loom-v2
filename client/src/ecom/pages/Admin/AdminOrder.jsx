import React, { useEffect, useState } from 'react'
import FileStructure from '../../Components/FileStructure'
import AdminMenu from './AdminMenu'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Select } from 'antd'
const { Option } = Select


const AdminOrder = () => {
    const [order, setOrder] = useState([])
    const [status] = useState(["Not Processed", "Processing", "Shipped", "Delivered", "Exchanged", "Returned", "Cancel"])

    const getAllOrder = async () => {

        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/get-all-order`);
            setOrder(data?.orders)

        } catch (error) {
            console.log(" Admin Error--> ", error)
        }
    }

    useEffect(() => {
        getAllOrder()
    }, [])

    const HandleChange = async(id ,value) =>{
        try {
            await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/order-status/${id}`,{
                status:value
            }); 
            getAllOrder();
        } catch (error) {
            console.log("Status Error --> ",error)
        }
    }


    return (
        <FileStructure>
            <div className="container">
                <AdminMenu />

                <CartProduct>
                    {order.length > 0 ? order?.map((item) => (
                        <div key={item?._id} className='productBox'>
                            <h2> Order At :  {item?.createdAt.split('T')[0]} </h2>

                            {item?.products?.map((p) => (
                                <ItemInfo>
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

                                        </div>
                                    </Link>

                                    <div className='orderStat'> <h3> Order Status : </h3> <Select style={{ width: '100%' }}
                                        bordered={false}
                                        showSearch
                                        value={item?.status}
                                        onChange={(value) => HandleChange( item?._id ,value)}
                                        className='selector'
                                    >
                                        {status.map((s,i) => <Option key={i} value={s} >
                                            {s}
                                        </Option>)}
                                    </Select>
                                    </div>
                                </ItemInfo>
                            ))}

                        </div>
                    )) : <h1> Sorry!! Your Cart is Empty </h1>}

                </CartProduct>
            </div>

        </FileStructure>
    )
}

export default AdminOrder

const ItemInfo = styled.div`
display: grid;
grid-template-columns: repeat(2,minmax(10rem,1fr));

@media only screen and (max-width: 450px){
    grid-template-columns: repeat(1,minmax(10rem,1fr)) !important;
    padding: 0.5rem !important;
}
gap: 2rem;
padding: 2rem;
border-radius: 1rem;
align-items:center;
margin-bottom: 1rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

.orderStat{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
}


`

const CartProduct = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .productBox{
    padding: 1rem 2rem;
    border-radius: 1rem;

    @media only screen and (max-width: 450px){

        div a{
            padding: 1rem !important;
        }
    }
    div{
      &:hover{
        background: var(--blackHover);
      }

      a{
        display: flex;
        gap: 2rem;
        padding: 2rem;
      }

      .productData{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        box-shadow: none !important;

        .productPrice em{
            font-weight: 600;
            color: #ff204b;
        }
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