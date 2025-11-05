import React, { useState } from 'react';
import Logo from './images/OIP-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
  border: "2px solid #31363F", borderRadius: "25px", backgroundColor: "#030303ff",
  color: "#fff", width: "300px", height: "50px", fontWeight: "bolder"
};

const inputButton = {
  border: "2px solid #6f7174ff", backgroundColor: "#030303ff", color: "#fff",
  width: "300px", height: "40px", fontWeight: "bolder"
};

const nextButton = {
  border: "2px solid #31363F", borderRadius: "25px", backgroundColor: "rgb(30, 215, 96)",
  color: "black", width: "300px", height: "50px", fontWeight: "bolder"
};

const imgStyle = { width: "60px", height: "60px", marginTop: "40px" };

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();
  let domain=true;
  const handleEmailNext = async() => {
    if (!email) return alert("Please enter your email");
    if(!email.endsWith('@gmail.com')&&!email.endsWith('@yahoo.com')&&!email.endsWith('@outlook.com')){
      domain=false;
     alert("We do not accept these domain");
    } 
    if(domain){
      domain=true;
      const res = await fetch("http://localhost:5000/api/auth/check-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email})
    });
    const data=await res.json();
    if(res.status===200){
      setStep(2);
    }
    else{
      alert(data.msg);
    }
  };
    } 
    

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!password) return alert("Please enter a password");

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    alert(data.msg || "Signup complete!");
    if (res.ok) navigator("/login");
  };

  return (
    <div style={{
      backgroundColor: "#030303ff", display: "flex", flexDirection: "column",
      justifyContent: "flex-start", alignItems: "center", margin: "0 auto",
      height: "100vh", gap: "10px"
    }}>
      <img onClick={() => navigator('/')} style={imgStyle} src={Logo} alt='logo' />
      <h1 style={{ color: "#fff", margin: "0" }}>Sign up to</h1>
      <h1 style={{ color: "#fff", margin: "0" }}>start listening</h1>

      {step === 1 && (
        <>
          <legend style={{ color: "#fff", marginTop: "25px" }}>Email address</legend>
          <input
            onChange={(e) => setEmail(e.target.value)}
            style={inputButton}
            type="email"
            placeholder='name@domain.com'
            value={email}
          />
          <a href='/' style={{ color: "rgb(30, 215, 96)" }}>Use phone number instead</a>
          <button onClick={handleEmailNext} style={nextButton}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <legend style={{ color: "#fff", marginTop: "25px" }}>Create Password</legend>
          <input
            onChange={(e) => setPassword(e.target.value)}
            style={inputButton}
            type="password"
            placeholder='Enter password'
            value={password}
          />
          <button onClick={handleSignUp} style={nextButton}>Sign Up</button>
        </>
      )}

      <p style={{ color: "#fff" }}>------------------ Or -----------------</p>
      <button style={buttonStyle}>Sign up with Google</button>
      <button style={buttonStyle}>Sign up with Apple</button>
      <p style={{ color: "#31363F" }}>---------------------------------------</p>
      <h4 style={{ color: "#fff", margin: "0" }}>
        Already have an account?
        <a style={{ color: "rgb(30, 215, 96)", fontWeight: "bold", marginLeft: "3px" }} href='/login'>Log in here</a>
      </h4>
      <p style={{ color: "#31363F" }}>
        This site is protected by reCAPTCHA and the Google
      </p>
    </div>
  );
};

export default SignUp;
