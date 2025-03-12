import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { CgHomeAlt, CgList, CgShoppingCart } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { TbNotification } from "react-icons/tb";
import { Fade } from "react-awesome-reveal"
import { useSelector } from 'react-redux'

const UserMenu = () => {

    const user = useSelector((state) => state?.authReducer?.authData);  // Ensure default value

    const handleActive = (e) => {
        e.target.classList.toggle('userActive')
    }
    return (
        <UserLeft className='userLeft'>
            <ul>
                <Link to={"/"} > <li onClick={(e) => handleActive(e)} >  <Fade direction='left' >
                    <CgHomeAlt /> <span> Home</span>
                </Fade> </li> </Link>

                <Link to={"/dashboard/user/profile"} > <li onClick={(e) => handleActive(e)} >  <Fade direction='left' >
                    <BiUser /> <span> {user?.userDetail?.name}</span>
                </Fade> </li> </Link>

                <Link to={"/"} > <li onClick={(e) => handleActive(e)} >  <Fade direction='left' >
                    <CgShoppingCart /> <span> Cart</span>
                </Fade> </li> </Link>

                <Link to={"/dashboard/user/orders"} > <li onClick={(e) => handleActive(e)} >  <Fade direction='left' >
                    <CgList /> <span> Order</span>
                </Fade> </li> </Link>

                <Link to={"/"} > <li onClick={(e) => handleActive(e)} >  <Fade direction='left' >
                    <TbNotification /> <span> Notification</span>
                </Fade> </li> </Link>

            </ul>
        </UserLeft>
    )
}

export default UserMenu



const UserLeft = styled.div`
min-height: inherit;
backdrop-filter: blur(10px);
background: rgb(45 45 45 / 82%);
--webkit-backdrop-filter: blur(17px);
position: fixed;
top: 0; left:0;

@media only screen and (max-width: 950px) {
    display: none;
}

ul{
    margin-top: 5rem;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    box-shadow: rgba(219, 219, 219, 0.24) 0px 3px 8px;
    flex-direction: column;
    gap: 3rem;

    a{
        padding: 1rem 2rem;
        border-radius: 1rem;
        transition: all 100ms ease-in;

        &:hover{
            transform: scale(1.1);
            background: var(--blackLight);
        }
        li{
            font-size: var(--mainFont);
            display: flex;
            gap: 0.5rem;
            align-items: center;
            width: 100%;

            div{
                display: flex;
            }

                span{
                    color: white;
                }

                svg path{
                    color: white;
                }
        }
    }

}
`