import React from 'react'
import FileStructure from '../../Components/FileStructure'
import AdminMenu from './AdminMenu';

const AdminDashboard = () => {

  return (
    <FileStructure>
      <div className="container">
        
        <AdminMenu/>

      </div>
    </FileStructure>
  )
}

export default AdminDashboard