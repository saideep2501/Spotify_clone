import React from "react";
import Logo from './images/OIP-removebg-preview.png';
import Home from './images/icons8-home-150.png';
import {useNavigate} from 'react-router-dom'

const Navbar=()=>{
    const navigate=useNavigate();
    return(
        <div style={{
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            gap:"30px",
            padding:"10px",
            background:"black",
            cursor:"pointer"
        }}>
            <img src={Logo} alt="Logo"
            style={{
                width:"50px",
                height:"50px",
                marginTop:"10px"
            }}/>
            <img onClick={()=>navigate('/')}src={Home} alt="Home"
            style={{
                width:"30px",
                height:"30px",
                marginTop:"20px"
            }}/>
            <input type="text" placeholder="Search" id="ip"
            style={{
                width:"350px",
                height:"35px",
                borderRadius:"25px",
                border:"2px solid black",
                backgroundColor:"#31363F",
                margin:"10px",
                color:"#fff"
            }}/>
            <div
            style={{
                display:"flex",
                color:"rgb(179, 179, 179)",
                gap:"15px",
                marginLeft:"350px",
                cursor:"pointer"
            }}>
                <h3 onClick={()=>navigate('/premium')}>Premium</h3>
                <h3>Support </h3>
                <h3>Download </h3>
                <h3>|</h3>
                <h4>Install app</h4>
                <h4 onClick={()=>navigate('/signup')}>Sign up</h4>
                <button onClick={()=>navigate('/login')} type="button"style={{
                    border:"2px solid #fff",
                    borderRadius:"25px",
                    fontWeight:"900",
                    width:"120px",
                    height:"50px",
                    marginTop:"10px",
                    cursor:"pointer"
                }}>Log in</button>
            </div>
        </div>
    )
}
export default Navbar;