import React from "react";
const UserLibrary=()=>{
    return(
        <div>
            <p style={{
                fontWeight:"bolder",
                marginLeft:"10px"
            }}>Your Library</p>
            <div
            style={{
                border:"2px solid #31363F",
                backgroundColor:"#31363F",
                justifyContent:"center",
                padding:"0 0 10px 0",
                borderRadius:"25px",
                margin:"0 8px 0 8px",
                textAlign:"center",
                
            }}>
                <h3
                style={{
                    margin:"5px 0 0 0 "
                }}>Create your playlist</h3>
                <p>It's easy we'll help you</p>
                <button style={{
                    border:"2px solid #ffff",
                    borderRadius:"25px",
                    color:"black",
                    textAlign:"center",
                    height:"40px",
                    width:"120px",
                    fontWeight:"bolder",
                    cursor:"pointer"
                }}>Create playlist</button>
            </div>
            <div
            style={{
                border:"2px solid #31363F",
                backgroundColor:"#31363F",
                justifyContent:"center",
                padding:"0 0 10px 0",
                borderRadius:"25px",
                margin:"40px 8px 0 8px",
                textAlign:"center"
            }}>
                <h3
                style={{
                    margin:"5px 0 0 0 "
                }}>Let's find some podcasts to follow</h3>
                <p>We will keep you updated on new episodes</p>
                <button style={{
                    border:"2px solid #ffff",
                    borderRadius:"25px",
                    color:"black",
                    textAlign:"center",
                    height:"40px",
                    width:"150px",
                    fontWeight:"bolder",
                    cursor:"pointer"
                }}>Browse podcasts</button>
            </div>
        </div>
            

    )
}
export default UserLibrary;