import { useEffect, useState } from "react"
import { useUser } from "../../context/context"
import axios from "axios"
import { Outlet } from "react-router-dom"

const PrivateAdmin = () =>{
    const [ok ,setOk] = useState(false)
    const [user] = useUser()

    useEffect(()=>{
        
        const AdminCheck = async() =>{
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/admin-verify`)

            if (res.data.ok) {
                setOk(true)
            }else{
                setOk(false)
            }
        }

        if (user?.token) {
            AdminCheck()
        }
    } ,[user?.token])

    return ok ? <Outlet/> : "Spinner"
}

export default PrivateAdmin