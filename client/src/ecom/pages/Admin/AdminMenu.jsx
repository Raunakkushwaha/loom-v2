import React from 'react'
import styled from 'styled-components'
import { CgShoppingBag } from "react-icons/cg";
import { BiCategory, BiShoppingBag, BiSolidUser } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiUser } from 'react-icons/hi';
import { useUser } from '../../context/context';
import { useSelector } from 'react-redux';

const AdminMenu = () => {
   const user = useSelector((state) => state?.authReducer?.authData);
  return (
    <>

      <DashboardDiv>
        <h3> Admin DashBoard </h3>

        <div className="admin_details">
          <h3> <span> <HiUser /> </span> {user?.userDetail?.name} </h3>
          <span> <HiOutlineMail /> {user?.userDetail?.email} </span>
        </div>
      </DashboardDiv>

      <DashboardCard>
      <Link to={"/dashboard/admin/create-category"}> <div className="card"> <BiCategory />  <h3> Category Access </h3> </div> </Link>
      <Link to={"/dashboard/admin/create-product"}> <div className="card">  <BiShoppingBag /> <h3> Create Product </h3>  </div> </Link>
      <Link to={"/dashboard/admin/products"}>  <div className="card">  <CgShoppingBag /> <h3> Show Product </h3> </div> </Link>
      <Link to={"/dashboard/admin/orders"}>  <div className="card">  <BiSolidUser /> <h3> Orders Access </h3> </div> </Link>
      </DashboardCard>
    </>

  )
}

export default AdminMenu

const DashboardDiv = styled.div`
  background : #fffafa;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  padding : 1rem 2rem 2rem;

  @media only screen and (max-width: 450px) {
    flex-wrap: wrap;

    h3{
      font-size: var(--mainFont) !important;
    }
  }

  h3{
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: var(--mainBigFont);
  }
  
  .admin_details{
    text-align : center;
    font-size: var(--mainBigFont);
    
    span{
      font-size: var(--smallFont);
      font-family : var(--font2);
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  
`

const DashboardCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4,minmax(10rem,1fr));
  width: 100%;
  gap: 2rem;
  padding: 1rem 2rem;
  
  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(1,minmax(10rem,1fr));

    a{
      padding: 1rem !important;
    }

    svg{
      font-size: var(--mainBigFont) !important;
    }
  }

  a{
    border: 1px solid var(--black);
    padding: 2rem;
    border-radius: 1rem;
    transition: all 200ms ease-out;
    cursor: pointer;
    
    .card{
      display: flex;
      align-items:center;
      justify-content: center;
      gap: 1rem;
    }

    &:hover{
      transform: scale(1.1);
      background: var(--black);

      h3,svg path{
        color: var(--white);
      }
    }


    h3{
      font-size: var(--mainFont);
      font-weight: 550;
    }

    svg{
      font-size: var(--mainFont);
    }
  }    
`