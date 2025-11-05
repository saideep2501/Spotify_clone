import React from 'react';
import Logo from './images/OIP-removebg-preview.png';
import {useNavigate} from 'react-router-dom'
const navStyle={display:"flex",justifyContent:"flex-start",alignItems:"flex-start",gap:"2px",padding:"10px",background:"black",cursor:"pointer",color:"#fff"};
const imgStyle={width:"60px",height:"60px",marginLeft:"250px"};
const marginStyle={marginTop:"15px",marginBottom:"0",marginLeft:"300px"};
const textStyle={marginTop:"15px",marginBottom:"0",marginLeft:"45px"}
const titleStyle={marginTop:"10px",marginBottom:"0",marginLeft:"0px"};
const headerStyle={color:"#fff",marginLeft:"250px",marginTop:"0",}
const divStyle={color:"#fff",backgroundColor:"#030303ff",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",margin:"0 auto 0 auto",height:"100vh"}
const Premium=()=>{
    const navigate=useNavigate();
    return(
        <div>
            <nav style={navStyle}>
                <img onClick={()=>navigate('/')}style={imgStyle} src={Logo} alt="logo"/>
                <h2 style={titleStyle}>Spokify</h2>
                <h3 style={marginStyle}>Premium</h3>
                <h3 style={textStyle}>Support </h3>
                <h3 style={textStyle}>Download </h3>
                <h3 style={textStyle}>|</h3>
                <h3 onClick={()=>navigate('/signup')} style={textStyle}>Sign up</h3>
                <h3 onClick={()=>navigate('/login')}style={textStyle}>Login</h3>
            </nav>
            <div style={{backgroundImage:"linear-gradient(pink,black)",marginTop:"0"}}>
            <header style={headerStyle}>
                <h1 style={{marginBottom:"2px",fontSize:"xxx-large",marginTop:"0",paddingTop:"10px"}}>Listen without limits. Try 2</h1>
                <h1 style={{marginTop:"0",marginBottom:"2px",fontSize:"xxx-large"}}>months of Premium for</h1>
                <h1 style={{marginTop:"0",fontSize:"xxx-large",marginBottom:"2px"}}>₹119.</h1>
                <p style={{marginTop:"5px",marginBottom:"35px"}}>Only ₹119/month after. Cancel anytime.</p>
            </header>
            <main>
                <button style={{borderRadius:"25px",width:"190px",height:"50px",backgroundColor:"pink",fontWeight:"bolder",marginLeft:"250px",marginBottom:"10px",marginRight:"10px",fontSize:"14px"}}>Try 2 months at ₹119</button>
                <button style={{border:"2px solid  rgb(179, 179, 179)",borderRadius:"25px",width:"190px",height:"50px",backgroundColor:"#030303ff",color:"#fff",fontWeight:"bolder",marginBottom:"10px"}}>View all plans</button>
            </main>
            <p style={{color:"#fff",marginLeft:"250px",marginBottom:"2px",fontSize:"12px"}}>₹119 for 2 months, then ₹119 per month after. Offer only</p>
            <p style={{color:"#fff",marginLeft:"250px",marginTop:"0",fontSize:"12px",marginBottom:"0",padding:"2px"}}>available if you haven’t tried Premium before. Terms apply.</p>
            </div>
            <div style={divStyle}>
                    <h1 style={{color:"#fff",textAlign:"center",fontSize:"xxx-large",marginBottom:"5 px"}}>
                    Experience the difference</h1>
                    <h2 style={{fontWeight:"normal",marginTop:"0",marginBottom:"0"}}>Go Premium and enjoy full control of your listening.Cancel</h2>
                    <h2 style={{fontWeight:"normal",marginTop:"0",marginBottom:"0"}}>anytime.</h2>
            
            </div>
        </div>
    )
}
export default Premium;