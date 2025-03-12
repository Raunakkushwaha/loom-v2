import React from 'react'
import NavBar from './NavBar'
import FDash from './Footer'

const FileStructure = ({ children }) => {
    return (
        <>
            <NavBar/>

            <main>
                {children}
            </main>

            <footer>
                <FDash/>
            </footer>
        </>
    )
}

export default FileStructure