import React from 'react'
import styled from 'styled-components'
import FileStructure from '../../Components/FileStructure'

const UserDash = ({ children }) => {
    return (
        <FileStructure>
            <UserMenuDiv>
                {children}
            </UserMenuDiv>
        </FileStructure>
    )
}

export default UserDash

const UserMenuDiv = styled.div`
    min-height:inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
`