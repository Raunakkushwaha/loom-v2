import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../context/context';
import FileStructure from '../../Components/FileStructure';

const Login = () => {
  const [user, setUser] = useUser()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password })

      if (res.data.success) {
        alert(res.data.message)
        setUser({
          ...user,
          userDetail: res.data.user,
          token: res.data.token
        })
        localStorage.setItem("userDetail", JSON.stringify(res.data))
        navigate("/")
      } else {
        alert(res.data.message)
      }

    } catch (error) {
      console.log(error)
      alert("Something Went Wrong!! Please Try Again!")
    }
  }

  return (
    <FileStructure>
      <LoginDiv>
        <RegisterDiv className='RegisterDiv'>

          <h3> Login YourSelf</h3>

          <form onSubmit={handleLogin} >

            <label htmlFor='email' > Enter Your Email Address</label>
            <input type="email" id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label htmlFor='pass' > Enter Your PassWord</label>
            <input type="password" id='pass' autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type='submit' className='regButton'> Login </button>
          </form>
        </RegisterDiv>
      </LoginDiv>
    </FileStructure>
  )
}

export default Login

const LoginDiv = styled.div`
  background: no-repeat url('/bg1.jpg') ;
  background-size: cover;
  height: 100vh ;
  display: flex;
  justify-content: center;
  align-items:center;
`

const RegisterDiv = styled.div`

  display : flex;
  border: 1px solid white;
  justify-content : center;
  flex-direction : column;
  align-items : center;
  margin-top: 3rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius : 2rem;
  padding : 2rem;
  backdrop-filter: blur(10px);
  
  h3{
    font-family: 'Rubik', sans-serif;
    color: var(--white);
    font-size : 2rem;
  }
  
  form{
    margin-top : 2rem;
    display : flex;
    flex-direction: column; 
    padding : 0 2rem;

    label{
      font-size : 1.2rem;
      color: var(--white);
      margin-top : 1.5rem;
      font-family: 'Signika', sans-serif;
    }

    input{
      border : none;
      outline : none;
      border-bottom : 1px solid white;
      font-size : 1.25rem;
      color: var(--white);
      margin-top: 1.5rem;
      background: transparent;
    }
  }

`