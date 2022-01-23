import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// COMPONENTS
import SingleUser from './SingleUser'

// https://randomuser.me/api/?results=5

const UserList = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=5')
    setUsers(response.data.results)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className='user-list'>
      <ul>
        {users.map((user, idx) => (
          <li>
            {' '}
            <SingleUser user={user} key={idx} />{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
