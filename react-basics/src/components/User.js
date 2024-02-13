import { useState } from "react"

const User = () => {

    // const [firstName, setFirstName] = useState('Ramesh')
    // const [lastName, setLastName] = useState('Fadatare')
    // const [email, setEmail] = useState('ramesh@gmail.com')

    const [user, setUser] = useState({
        firstName: "Ramesh",
        lastName: "Fadatare",
        email: "ramesh@gmail.com"
    })

    function updateUser(){
        // setFirstName('Ram')
        // setLastName('Jadhav')
        // setEmail('ram@gmail.com')
        setUser({
            firstName: 'Ram',
            lastName: 'Jadhav',
            email: 'ram@gmail.com'
        })
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>

            <button onClick={updateUser}>Update User</button>
        </div>
    )
}

export default User