import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const LoginContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        user: JSON.parse(localStorage.getItem("profile")).user || null,
        token: JSON.parse(localStorage.getItem("profile")).token || null,
    })

    axios.defaults.headers.common['Authorization'] = user?.token

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('profile'))
        console.log("I am in login context and here is data ==> ", data)
        if (data) {
            setUser({
                ...user,
                user: data.user,
                token: data.token
            })
        }
        // eslint-disable-next-line
    }, [])

    return (
        <LoginContext.Provider value={[user, setUser]} >
            {children}
        </LoginContext.Provider>
    )
}

const useUser = () => useContext(LoginContext)

export { useUser, UserProvider }  