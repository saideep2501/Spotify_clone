import React from "react";

const Template=({name,image,imgStyle,link,singer})=>{
    return(
        <div>
            <div style={{
            display:"flex",
            flexDirection: 'row',
            gap:"20px",
            justifyContent:"center",
            alignItems:"flex-start"
        }}>
                <img src={image} alt="logo" style={{...imgStyle,cursor:"pointer"}}
                onClick={()=>{
                    console.log("clicked");
                     window.location.href=link;
                }}/>
            </div>
            <div style={{
                textAlign:"center",
                color:"#ffff"
            }}>
                <h3 style={{
                    marginBottom:"10px",
                    marginTop:"5px"
                }}>{name}</h3>
                <p style={{
                    marginBottom:"10px",
                    marginTop:"5px"
                }}
                >{singer}</p>
            </div>
        </div>
    )
}
export default Template;