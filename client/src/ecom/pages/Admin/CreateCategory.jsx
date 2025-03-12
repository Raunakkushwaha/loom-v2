import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BiEditAlt } from "react-icons/bi";
import { TiFolderAdd } from "react-icons/ti";
import { Modal } from "antd"
import CategoryForm from './CategoryForm'
import { RiDeleteBinLine } from "react-icons/ri";
import FileStructure from '../../Components/FileStructure'
import AdminMenu from './AdminMenu';


const CreateCategory = () => {

  const [dataCat, setDataCat] = useState([])
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState("")

  //! --->  CRUD FUNCTION FOR CATEGORY

  //* -->  1. Create A New Category
  const CreateCatForm = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/category/create-category`, { name })
      if (res.data.success) {
        setName("")
        getCategories()
        setVisible(false)
      }

    } catch (error) {
      console.log(error)
    }
  }

  //* ---> 2. Get All Category
  const getCategories = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/getcategory`)
    setDataCat(data.category)
  }

  //* ---> 3. Delete A Category
  const handleDelete = async (e, id) => {
    await axios.delete(`${process.env.REACT_APP_API}/api/v1/category/delete-category/${id}`)
    getCategories()
  }


  //| --> Fetching Category at initial time
  useEffect(() => {
    getCategories()
  }, [])



  return (
    <FileStructure>
      <div className="container">
      <AdminMenu/>
        <AdminBox>
          <div className="Catdetails">

            <div className="CatHeader">
              <button onClick={() => setVisible(true)} > Add Category <TiFolderAdd />  </button>
              <span> Total Categories :  {dataCat?.length} </span>
            </div>

            <table className="CategoryTable">   {/* --> Table Content */}
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Action </th>
                </tr>
              </thead>

              <tbody>
                {dataCat?.map((items) => (
                  <>
                    <tr key={items._id}>
                      <td key={items._id}>{items?.name}</td>
                      <td className='catBtn'>
                        <EditBtn onClick={(e) => e.preventDefault()} >
                          Edit <BiEditAlt />
                        </EditBtn>
                        <EditBtn onClick={(e) => { handleDelete(e, items._id) }} >
                          Delete <RiDeleteBinLine />
                        </EditBtn>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>


          {/* PROMPT MODEL */}

          <Modal onCancel={() => setVisible(false)} footer={null} visible={visible} >
            <CategoryForm name={name} setName={setName} CreateCatForm={CreateCatForm} />
          </Modal>

        </AdminBox>
      </div>

    </FileStructure>
  )
}

export default CreateCategory

const AdminBox = styled.div`
  padding : 1rem 2rem;

  .Catdetails{
      border-radius: 1rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 1rem 2rem;

      .CatHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        font-size: 1.75rem;
        
        button{
          color: #FAF9F6;
          padding: 0.75rem;
          border-radius : 0.5rem;
          background: #36454F;
          font-size: 1.5rem;
          border:none;
          outline:none;
          gap: 0.5rem;
          cursor: pointer;
          display:flex;
          align-items:center;
          transition: all 200ms ease-out;

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

const EditBtn = styled.div`
  padding:1rem;
  font-size: 1.5rem;
  display:flex;
  align-items:center;
  font-family: 'Rubik', sans-serif;
  cursor:pointer;
  gap: 0.5rem;
  background: #353935;
  border-radius: 0.75rem;
  color:white;
  transition: all 150ms ease-out;
  margin-right: 1rem;
  svg{
    path{
    color:white;
    }
  }

  &:hover{
    transform: scale(1.1)
  }
`