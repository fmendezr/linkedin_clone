import React from 'react'
import { useContext } from 'react'

import AuthContext from '../Context/AuthContext'

const HomePage = () => {

  let { user } = useContext(AuthContext);
  
  console.log(user)

  return (
    <div>{user.username}</div>
  )
}

export default HomePage