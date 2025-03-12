import React, { useEffect, useState } from 'react'
import FileStructure from './FileStructure'
import AdminMenu from '../pages/Admin/AdminMenu'
import axios from 'axios'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { BiEditAlt } from "react-icons/bi";
import styled from 'styled-components';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Products = () => {

  const [productData, setProductData] = useState([])
  const [id ,setId] = useState("");
  const [slug ,setSlug] = useState("");



  const getAllProduct = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
    setProductData(data?.product)
  }

  const deleteProduct = async () =>{
    try {
      
      await axios.delete(`${process.env.REACT_APP_API}/api/v1/product/delete-product/${id}`)
      getAllProduct()

    } catch (error) {
      console.log("Delete error --> " , error)
    }
  }

  useEffect(() => {
    getAllProduct()
  }, [])

  const columns = [
    { field: '_id',
     headerName: 'ID', 
     flex: 0.2,
     },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'slug',
      headerName: 'Slug ',
      flex: 0.3,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: 0.2,
    }, 
    {
      field: 'price',
      headerName: 'Price',
      flex: 0.2,
    },
    {
      headerName: 'Action',
      flex: 0.5,
      renderCell: () => {
        return (
          <div className='actionBtn'>
            <UpdateButton> <Link to={`/dashboard/admin/update-products/${slug}`}> Edit <BiEditAlt/> </Link> </UpdateButton> 
            <UpdateButton onClick={deleteProduct} >Delete <AiFillDelete/> </UpdateButton>
          </div>
        )
      }
    }

  ];

  return (
    <FileStructure>
      <div className="container">
        <AdminMenu />

        <div className="details">
          <DataGrid
          
            rows={productData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10]}
            getRowId={(row) => row._id}
            slots={{ toolbar: GridToolbar }}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                printOptions: { disableToolbarButton: true },
                csvOptions: { disableToolbarButton: true },
              },
              row: {
                onFocus: (event) => {
                  setSlug(event.currentTarget.children[2].innerText)
                  setId(event.currentTarget.getAttribute('data-id'));
                },
              }
            }}
            
          />
        </div>
      </div>
    </FileStructure>
  )
}

export default Products

const UpdateButton = styled.button`
  background: #36454F;
  padding: 0.25rem 0.5rem;
  border-radius : 1rem;
  font-size: var(--verySmallFont);
  border-radius: 1rem;
  border:none;
  outline:none;
  cursor: pointer;
  transition: all 200ms ease-out;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  color: #FAF9F6;
  
  a{
    color: #FAF9F6;
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
`