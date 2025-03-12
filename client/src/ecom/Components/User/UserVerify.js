import { useEffect, useState } from "react"
import { useUser } from "../../context/context"
import axios from "axios"
import { Outlet } from "react-router-dom"
import Spinner from "../../extra/Spinner"
import { useSelector } from "react-redux"

const PrivateUser = () => {
    const [ok, setOk] = useState(false)
    const user = useSelector((state) => state?.authReducer?.authData);  // Ensure default value
    console.log("user in verification ===> ",user.token)

    useEffect(() => {

        const UserCheck = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-verify`,
                {
                    headers : {
                        Authorization: `Bearer ${user?.token}`
                    }
                }
            )

            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }

        if (user?.token) {
            UserCheck()
        }
    }, [user?.token])

    return ok ? <Outlet /> : <Spinner />
}

export default PrivateUser