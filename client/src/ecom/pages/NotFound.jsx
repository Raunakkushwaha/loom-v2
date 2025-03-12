import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import FileStructure from '../Components/FileStructure'

const NotFound = () => {
    return (
        <FileStructure>
            <NotFoundDiv className="container">
                <h3> Error 404 </h3>
                <p> Page Not Found !!</p>

                <Button type='button'> <Link to="/" > Home Page </Link> </Button>
            </NotFoundDiv>
        </FileStructure>
    )
}

export default NotFound

const NotFoundDiv = styled.div`
    display : flex;
    justify-items: center;
    align-items : center;
    flex-direction : column;
    row-gap : 3rem;
    h3{
        font-size : 4rem;
        
    }

    p{
        font-size : 5rem;
    }
`
const Button = styled.button`
    background : black;
    border: none;
    outline: none;
    padding : 2rem 3rem; 
    font-size : 2rem;
    cursor : pointer;
    border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
    
    a{
      color : white;
    }
`