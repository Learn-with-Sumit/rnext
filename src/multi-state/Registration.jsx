import { useState } from 'react'

const Registration = () => {
    
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        hobbies: []
    });

  return (
    <div>Registration</div>
  )
}

export default Registration