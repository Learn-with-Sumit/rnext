import React from 'react'

import { useAuth } from '../hooks/useAuth'

import { Link } from 'react-router-dom'

const HomePage = () => {
  const {auth} = useAuth();
  console.log(auth);

  return (
    <div>
      <p>HomePage</p>
      <Link to="/me">Go to Profile Page</Link>
    </div>
  )
}

export default HomePage