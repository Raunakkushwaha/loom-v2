import React from 'react'
import styled from 'styled-components'
import UserDash from './UserDash'
import { useUser } from '../../context/context'

const UserProfile = () => {
  const [user] = useUser()

  return (
    <UserDash>

      <ProfileBox className='profileBox'>

        <div className="box">

          <div className="boxLeft">
            <div className='dashHead'> <h3>Edit Profile  </h3>  </div>

            <label htmlFor=""> Your Name </label>
            <input type="text" placeholder='Enter product name' className='inputProduct' value={user?.userDetail?.name} />

            <label htmlFor=""> Your Email </label>
            <input type="text" placeholder='Enter product email' className='inputProduct' value={user?.userDetail?.email} />

            <label htmlFor=""> Enter Your Address </label>
            <input type="text" placeholder='Enter product Address' className='inputProduct' value={user?.userDetail?.address} />

            <label htmlFor=""> Enter Your Phone </label>
            <input type="text" placeholder='Enter Phone Number' className='inputProduct' value={user?.userDetail?.phone} />

          </div>


          <div className="boxRight"> 
          <h3> Notification </h3>
           </div>
        </div>
      </ProfileBox>

    </UserDash>
  )
}

export default UserProfile

const ProfileBox = styled.div`
  flex: 0.5;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
  .box{
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    font-size: 1.25rem;

    .boxLeft{

      .dashHead{
        dis
        h3{

        }
      }
      font-family: var(--font3);
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      display : flex;
      flex: 0.5;
      flex-direction: column;
      row-gap : 1rem;
      padding: 1rem 2rem;
      border-radius: 1rem;

      label{
        font-size: 1.25rem;
        font-weight: 600;
      }
      
      .inputProduct{
        padding: 1rem ;
        border:none;
        outline:none;
        border-bottom: 1px solid var(--black);
        font-size: var(--verySmallFont);
      }
    }

    .boxRight{
      flex: 0.5;
      font-family: var(--font3);
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      display : flex;
      flex: 0.5;
      flex-direction: column;
      row-gap : 1rem;
      padding: 1rem 2rem;
      border-radius: 1rem;
    }
  }
`