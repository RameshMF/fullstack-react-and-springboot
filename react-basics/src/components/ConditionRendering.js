import { useState } from "react"

const ConditionRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let message;
    if(isLoggedIn){
        message = <p>Welcome, User</p>
    }else {
        message = <p> Please Login!</p>
    }

    function handleLogin(){
        setIsLoggedIn(true)
    }

    return (
        <div>
            {
                isLoggedIn && <p>Welcome, User</p>
            }

            <br />

            <button onClick={handleLogin} >Login</button>
        </div>
    )
}

export default ConditionRendering