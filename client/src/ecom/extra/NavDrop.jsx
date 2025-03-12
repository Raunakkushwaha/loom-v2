import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from "react-icons/ai";
import { useUser } from '../context/context'

const NavDrop = () => {
    const [user, setUser] = useUser()
    const [activeNav, setActiveNav] = useState("navDropHide")
console.log("User : ", user)

    const logout = () => {
        setActiveNav("navDropHide");
        localStorage.removeItem("userDetail");

        setUser({
            ...user,
            userDetail: null,
            token: "",
        })
    }

    return (
        <li className='navUser' onClick={() => { activeNav === "navDropHide" ? setActiveNav("navDropActive") : setActiveNav("navDropHide") }}>

            <Link className='userName' > {user?.userDetail?.name} <AiFillCaretDown /> </Link>

            <ul className={activeNav === "navDropHide" ? "navDropHide" : "navDropActive"} >

                <li> <Link to = {`/dashboard/${user?.userDetail?.role === 1 ? 'admin' : 'user/profile'}`}   onClick={() => { setActiveNav("navDropHide") }} >
                    Dashboard
                </Link> </li>
                <li onClick={logout} > <Link to="/login"> LogOut  </Link> </li>

            </ul>

            <ul className='navMedia'>

                <li> <Link to = {`/dashboard/${user?.userDetail?.role === 1 ? 'admin' : 'user/profile'}`}   onClick={() => { setActiveNav("navDropHide") }} >
                    Dashboard
                </Link> </li>
                <li onClick={logout} > <Link to="/login"> LogOut  </Link> </li>

            </ul>


        </li>
    )
}

export default NavDrop