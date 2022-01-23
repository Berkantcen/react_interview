import React from 'react'

const SingleUser = ({ user }) => {
  return (
    <div className='single-user'>
      <img src={user.picture.large} alt='' />
      <div className='user-info'>
        <h3>
          {user.name.first} {user.name.last}
        </h3>
        <p className='user-mail'>Email: {user.email}</p>
        <p className='user-location'>
          {user.location.country} | {user.location.city}
        </p>
      </div>
    </div>
  )
}

export default SingleUser
