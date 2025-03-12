import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import FileStructure from '../../Components/FileStructure'
import AdminMenu from './AdminMenu'

const { Option } = Select

const UpdateProduct = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [sProduct, setSProduct] = useState(undefined)
  const [id, setId] = useState("")
  const [category, setCategory] = useState([])
  const [photo, setPhoto] = useState("")
  const [name, setName] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState(undefined)
  const [shipping, setShipping] = useState(true)

  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/getcategory`)
      setCategory(data?.category)
    } catch (error) {
      alert('Error Occured! try again')
    }
  }

  const getSingleProduct = async (req, res) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${slug}`)
      setSProduct(data?.product)
      setId(data?.product?._id)
      setName(data?.product?.name)
      setDescription(data?.product?.description)
      setPrice(data?.product?.price)
      setShipping(data?.product?.shipping)
      setProductCategory(data?.product?.category)
      setQuantity(data?.product?.quantity)

    } catch (error) {
      alert('Error Occured! try again')
    }
  }

  useEffect(() => {
    getCategories()
    getSingleProduct()
    // eslint-disable-next-line
  }, [])


  const handleUpdate = async (e) => {
    e.preventDefault()

    try {
      const Fdata = new FormData();
      Fdata.append("name", name)
      Fdata.append("description", description)
      Fdata.append("price", price)
      Fdata.append("category", productCategory)
      Fdata.append("quantity", quantity)
      photo && Fdata.append("photo", photo)
      Fdata.append("shippinh", shipping)

      const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/product/update-product/${id}`, Fdata)

      if (res.data.success) {
        alert(`${res.data.message}`)
        navigate("/dashboard/admin/products")
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

            <CreateProDuctDiv className="CreateProduct container" >

              <Select style={{ width: '100%' }}
                placeholder="Select a category"
                bordered={false}
                showSearch
                className='selector'
                onChange={(value) => setProductCategory(value)}
                value={productCategory}
              >
                {category?.map(items => (
                  <Option key={items?._id} value={items?._id} > {items?.name} </Option>
                ))}
              </Select>

              <ProductImage>
                <label className='imageUpload'>
                  {photo ? photo?.name : 'Upload Image'}
                  <input type='file' name='photo' accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} hidden />
                </label>

                {photo ? (
                  <img src={URL.createObjectURL(photo)}
                    alt='Product_Image'
                  />
                ) : (
                  <img src={`${process.env.REACT_APP_API}/api/v1/product/get-photo/${id}`}
                    alt={`${sProduct?.name}`}
                  />
                )}
              </ProductImage>

              <input type="text" placeholder='Enter product name' value={name} onChange={(e) => setName(e.target.value)} className='inputProduct' />

              <textarea type="text" placeholder='Enter product description' value={description} onChange={(e) => setDescription(e.target.value)}
                className='inputProduct description' />

              <input type="text" placeholder='Enter product price' className='inputProduct' value={price} onChange={(e) => setPrice(e.target.value)} />

              <input type="text"
                placeholder='Enter product quantity' className='inputProduct' value={quantity} onChange={(e) => setQuantity(e.target.value)} />

              <Select style={{ width: '100%' }}
                placeholder="Shipping for product"
                bordered={false}
                showSearch
                value={shipping ? "Available" : "Not Available"}
                className='selector'
                onChange={(value) => { setShipping(value) }}
              >
                <Option value={true}> Available </Option>
                <Option value={false}> Not Available </Option>
              </Select>

              <button className='regButton container' onClick={handleUpdate} > Update Product </button>
            </CreateProDuctDiv>


          </div>
        </AdminBox>
      </div>

    </FileStructure>
  )
}

export default UpdateProduct

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