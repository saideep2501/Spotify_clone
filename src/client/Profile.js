import React from 'react';

const Userprofile=(props)=>{
    return(
        <div>
            <p>Username:{props.username}</p>
            <p>Password:{props.password}</p>
        </div>
    )
}
export default Userprofile;