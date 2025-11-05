import {React,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Logo from './images/OIP-removebg-preview.png';
const formStyle={border:"2px solid #31363F",borderRadius:"25px",backgroundColor:"#fff",color:"black",width:"300px",
    height:"50px"};
const imgStyle={width:"50px",height:"50px"}   
const buttonStyle={border:"2px solid #31363F",borderRadius:"25px",backgroundColor:"#030303ff",color:"#fff",width:"300px",
    height:"50px",fontWeight:"bolder"}
const Login=()=>{
    const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const handleUnameChange=(e)=>{
           setEmail(e.target.value);     
    }
    const[password,setPassword]=useState("");
    const handlePassChange=(e)=>{
        setPassword(e.target.value);
    }
    
    const handleKeyDown=async (e)=>{
        if(e.key==="Enter"){
             login();
        }
    }
    
    const login = async (e) => {
        if (!email || !password) {
            alert("Please enter both email and password");
            return;
        }
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
            });
            const data=res.json();
            console.log("Email:", email);
            console.log("Password:", password);
            if(res.ok){
                alert(data.msg||"Login Successful");
                navigate('/');
            }
            else{
                alert("Invalid credentials");
            }
        } catch (err) {
            alert("Failed to fetch. Is your server running?");
        }
    
};
    const handleLogin= async (e)=>{
            e.preventDefault();
            await login();
    }

    return(
       
        <div style={{height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#31363F',
                    }}>
            
            <form onSubmit={handleLogin} style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '40px',
                border: '1px solid #030303ff ',
                borderRadius: '6px',
                width:"500px",
                height:"500px",
                gap:"10px",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:'#030303ff'
            }}>
                <img onClick={()=>navigate('/')}style={imgStyle}src={Logo} alt="logo"/>
                <h2 style={{color:"#fff",marginBottom:"10px",marginTop:"0px"}}>Log in to Spokify</h2>
                <button style={buttonStyle}>Continue with Google</button>
                <button style={buttonStyle}>Continue with Facebook</button>
                <button style={buttonStyle}>Continue with Apple</button>
                <button style={buttonStyle}>Continue with phone number</button>
                <p style={{color:"#31363F",margin:"0"}}>----------------------------------------------------------------------------</p>
                <h4 style={{color:"#fff",margin:"0"}}>Email or Username</h4>
                <input onChange={handleUnameChange} style={formStyle} type="email" placeholder='Email or Username'value={email}/>
                <input onChange={handlePassChange} style={formStyle} type="password" placeholder='Password'onKeyDown={handleKeyDown} value={password} />
                 <button style={{width:"300px",height:"50px",border:"2px solid #31363F",borderRadius:"25px",backgroundColor:"rgb(30, 215, 96)",fontWeight:"bolder"}}>Login</button>
            </form>
            
        </div>
    )
}
export default Login;