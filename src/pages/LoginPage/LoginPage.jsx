import React, { useState } from 'react';



function LoginPage(props) {
    const [userName, setUserName] = useState(" ");

    const handleChange = (event) => {
        setUserName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.setUser(userName);
    }

    return (
        <div className="whole">
            <form onSubmit={handleSubmit}>
                <div>
                    <h3 style={{fontSize: "48px", color: "turquoise"}}>Enter a fun Username Below!</h3>
                    <label style={{fontSize: "20px", color: "turquoise"}}>Username</label>
                    <input type="text" onChange={handleChange} />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    ) 
}

export default LoginPage;