import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TbShoppingBagCheck } from "react-icons/tb";
import { Link } from 'react-router-dom'
import { Select } from 'antd'
import axios from 'axios';
import FileStructure from '../../Components/FileStructure';
import AdminMenu from './AdminMenu';

const { Option } = Select
const Createproduct = () => {
  const [catData, setCatData] = useState([])
  const [category, setCategory] = useState("")
  const [photo, setPhoto] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState(undefined)
  const [shipping, setShipping] = useState(true)


  //! --> Get all Product
  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/getcategory`)
      setCatData(data.category)
    } catch (error) {
      alert('Error Occured! try agaim')
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  //! --> Create Product
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const Fdata = new FormData();
      Fdata.append("name", name)
      Fdata.append("description", description)
      Fdata.append("price", price)
      Fdata.append("category", category)
      Fdata.append("quantity", quantity)
      Fdata.append("photo", photo)
      Fdata.append("shippinh", shipping)

      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/create-product`, Fdata)

      if (res.data.success) {
        alert(`${res.data.message}`)
      }
      else {
        alert(`${res.data.message}`)
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <FileStructure>
      <div className="container">
        <AdminMenu/>

        <AdminBox>
          <div className="details">

            <div className="CatHeader">
              <button> <Link to="/dashboard/admin/products"> Show Product <TbShoppingBagCheck /> </Link>  </button>
            </div>


            <CreateProDuctDiv className="CreateProduct container" >

              <Select style={{ width: '100%' }}
                placeholder="Select a category"
                bordered={false}
                showSearch
                className='selector'
                onChange={(value) => { setCategory(value) }}>
                {catData?.map(items => (
                  <Option key={items?._id} value={items?._id} > {items?.name} </Option>
                ))}
              </Select>

              <ProductImage>
                <label className='imageUpload'>
                  {photo ? photo?.name : 'Upload Image'}
                  <input type='file' name='photo' accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} hidden />
                </label>

                {photo && (
                  <img src={URL.createObjectURL(photo)}
                    alt='Product_Image'
                  />
                )}
              </ProductImage>

              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter product name' className='inputProduct' />

              <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter product description'
                className='inputProduct description' />

              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter product price' className='inputProduct' />

              <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}
                placeholder='Enter product quantity' className='inputProduct' />

              <Select style={{ width: '100%' }}
                placeholder="Shipping for product"
                bordered={false}
                showSearch
                className='selector'
                onChange={(value) => { setShipping(value) }}>
                <Option value={true}> Available </Option>
                <Option value={false}> Not Available </Option>
              </Select>

              <button className='regButton container' onClick={handleSubmit} > Create Product </button>
            </CreateProDuctDiv>


          </div>
        </AdminBox>
      </div>

    </FileStructure>
  )
}

export default Createproduct

const ProductImage = styled.div`
  display: flex;
  align-items: center;
  column-gap:3rem;
  justify-content: space-evenly;

  img{
    border-radius : 0.5rem;
    max-width: 10rem;
  }
`

const CreateProDuctDiv = styled.form`

  display : flex;
  flex-direction: column;
  row-gap : 3rem;

  .description{
  }

  .inputProduct{
    padding: 1rem 2rem;
    border:none;
    outline:none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: var(--smallFont);
  }

  .imageUpload {
    cursor : pointer
    font-size: var(--mainFont);
    padding : 1rem;
    width : 20%;
    border-radius : 1rem;
    border : 1px solid #36454F;
    transition : all 200ms ease-out;
    text-align: center;

    &:hover{
      color: #FAF9F6;
      background: #36454F;
    }
  }
`

const AdminBox = styled.div`
  padding : 1rem 2rem;
  
  @media only screen and (max-width: 450px){
    padding : 1rem !important;

    .deatils{
      padding: 1rem !important;
    }
  } 

  .details{
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1rem 2rem;

    .CatHeader{
      padding: 1rem 2rem;
      font-size: 1.75rem;
      display:flex;
      flex:right;
      
      button{
        color: #FAF9F6;
        background: #36454F;
        padding: 0.75rem;
        border-radius : 0.5rem;
        font-size: 1.5rem;
        border:none;
        outline:none;
        cursor: pointer;
        transition: all 200ms ease-out;

        a{
          color:#FAF9F6;
          display: flex;
          gap: 0.5rem;
          justify-content: space-between;
          align-items: center;
        }

        &:hover{
          transform: scale(1.1)
        }
        
        svg path{
          color: #FAF9F6;
        }

      }
    }
  }

    
`