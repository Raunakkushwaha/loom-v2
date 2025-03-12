import { Badge } from 'antd';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { CgList } from 'react-icons/cg';
import { TbInfoSquareRounded } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavDrop from '../extra/NavDrop';
import SeearchInput from './SeearchInput';
import Logo from "../../img/logo.png"
import { CgLogIn, CgShoppingCart } from "react-icons/cg";
import LogoSearch from '../../components/LogoSearch/LogoSearch';
import NavIcons from '../../components/NavIcons/NavIcons';
import { UilSearch } from "@iconscout/react-unicons";

const NavBar = () => {

    const cartProduct = useSelector((state) => state.cartProduct?.CartItem ?? []);
    const user = useSelector((state) => state?.authReducer?.authData);
    const [isNav, setIsNav] = useState("navHideM")
    const [colorChange, setColorchange] = useState(true);

    const handleNav = () => {
        isNav === "navHideM" ? setIsNav("navShowM") : setIsNav("navHideM");
    }

    const NavbarColor = () => {
        const changeNavbarColor = () => {
            if (window.scrollY >= 100) {
                setColorchange(false);
            }
            else {
                setColorchange(true);
            }
        };
        window.addEventListener('scroll', changeNavbarColor);
    }

    useEffect(() => {
        NavbarColor()
    }, [])

    return (
        <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }} >
            <nav>
                <div className="LogoSearch">
                    <Link to={"/"} >
                        <img src={Logo} alt="" />
                    </Link>
                    <div className="Search">
                        <input type="text" placeholder="#Explore" />
                        <div className="s-icon">
                            <UilSearch />
                        </div>
                    </div>
                </div>

                <NavIcons isEcom={true} user={user} cartProduct={cartProduct} />


                <div className="navIcon">
                    <div className='hamNav' onClick={handleNav} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </nav>

            <MenuDiv className={isNav} >
                <div className="items container">
                    <Fade direction='down' cascade >
                        <ul>
                            <li> <Link to={"/"} > <BiHomeAlt />  Home </Link> </li>

                            <li> <Link to={"/dashboard/user/profile"} className='specialA' >
                                <BiUser /> Profile
                            </Link> </li>

                            <li> <Link to={"/dashboard/user/orders"} className='specialA' >
                                <CgList /> Order
                            </Link> </li>

                            <li> <Link to={"/about"} > <TbInfoSquareRounded /> About </Link> </li>

                            {user?.userDetail ? <NavDrop /> : (<div className='liDiv'>
                                <li> <Link to={"/register"} > <CgLogIn /> Sign Up </Link> </li>
                                <li> <Link to={"/login"} > <CgLogIn /> Login </Link> </li>
                            </div>)}
                            <li> <Link to={"/cart"} > <CgShoppingCart />
                                Cart {user?.token ? <Badge count={cartProduct?.length > 0 ? cartProduct?.length : 0} /> : <></>}
                            </Link> </li>


                        </ul>
                    </Fade>
                </div>
            </MenuDiv>

        </header >

    )
}

export default NavBar

const MenuDiv = styled.div`
    transition: all 200ms ease-in;
    backdrop-filter: blur(15px);

    .items{
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;

        ul{
            display: flex;
            justify-content:space-between;
            flex:1 !important;
            gap: 5rem;
            flex-direction: column;
            

            li {
                a{
                    text-decoration: none;
                    color: white;
                    font-size: 2rem;

                    svg path{
                        color: white;
                    }
                }
            }
        }
    }
`