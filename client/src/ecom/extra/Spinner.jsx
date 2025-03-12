import React from 'react'
import FileStructure from '../Components/FileStructure'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CgLogIn } from 'react-icons/cg'
import { CircularProgress } from '@mui/material'

const Spinner = () => {
  return (
    <FileStructure>
        <SpinnerDiv className="container">
          <div className="spinBox">
            <CircularProgress/>
            <h3> You Need To Login To View This Page </h3>
            <button className='mainBtn'> <Link to={"/auth"}> Login Here <CgLogIn/> </Link> </button>
          </div>
        </SpinnerDiv>
    </FileStructure>
  )
}

export default Spinner

const SpinnerDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinBox{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 100%;
    align-items:center;
    justify-content: center;

    h3{
      font-size: 2rem;
    }

    button{

    }
  }
`