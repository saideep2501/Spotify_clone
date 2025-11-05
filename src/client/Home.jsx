import React from 'react';
import Template from './MusicTemplate';
import UserLibrary from './UserLibrary';
import blinding from './images/blinding.jpeg';
import play from './images/play.jpeg';
import lovely from './images/lovely.jpg';
import kun from './images/images.jpeg';
import athey from './images/athey.jpg';
import appudo from './images/appudo.jpeg';
import kili from './images/Kilimanjarosong.jpg';
import athhi from './images/chandramukhi.jpg';
import Dum from './images/Dum-Dare.webp';
import Konchem from './images/Eega-2012jpeg.jpg';
import Jingidi from './images/Guru-2017-250x250.jpg';
import Kutti from './images/Kutti.webp';
import Govindha from './images/Govindha.webp';
import Dorikithe from './images/Dorikithe.webp';
import Mathuga from './images/MAthuga.webp';
import Rakaasi from './images/Rakaasi.webp';
import Ar from './images/ar.webp';
import sid from './images/sid.webp';
import ani from './images/ani.webp';
import ari from './images/Ari.webp';
import atif from './images/atif.webp';
import pri from './images/Pri.webp';
import udit from './images/udit.webp';
import yoyo from './images/yoyo.webp';


const squareImageStyle = { height: "200px", width: "200px", borderRadius: "20px" };
const circleImageStyle = { height: "150px", width: "150px", borderRadius: "50%",objectFit:"cover" };

function Home (){
    return(
        <div>
            
      <div className='main'>
        <div className='left-container'>
          <UserLibrary/>
        </div>
        <div>
          <h1 style={{
              marginLeft:"410px",
              color:"#fff",
              marginTop:"0px"
            }}>Trending Songs</h1>
        </div>
        
        <div className='right-container' >
          
              <div className="scrollable" style={{
                display:"flex",
                gap:"50px",
                marginLeft:"40px",
                marginBottom:"20px",
              }}>
                <Template imgStyle={squareImageStyle}image={blinding} name="Blinding Lights" singer="The Weeknd" link="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"/>
                <Template imgStyle={squareImageStyle}image={play} name="Play Date" singer="Melani"/>
                <Template imgStyle={squareImageStyle}image={lovely} name="Lovely" singer="Billie Eillish"/>
                <Template imgStyle={squareImageStyle}image={kun} name="Kun Faya Kun" singer="AR Rahman"/>
                <Template imgStyle={squareImageStyle}image={appudo} name="Appudo Ippudo" singer="Siddarth" link="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"/>
                <Template imgStyle={squareImageStyle}image={kili} name="Kilimanjaaro" singer="Javed Ali"/>
                <Template imgStyle={squareImageStyle}image={athey} name="Athey Nanne" singer="Surya"/>
                <Template imgStyle={squareImageStyle}image={athhi} name="Atthindhom" singer="SP Bala Subramanyam"/>
              </div>
              <div>
                <h1 style={{
                  color:"#fff",
                  marginTop:"0px"
                }}>
                  Mood Boosters
                </h1>
              </div>
              <div className="scrollable" style={{
                display:"flex",
                gap:"50px",
                marginLeft:"40px",
                marginBottom:"20px",
              }}>
                <Template imgStyle={squareImageStyle}image={Dum} name="Dum Dare" singer="Nikhil" link="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"/>
                <Template imgStyle={squareImageStyle}image={Konchem} name="Konchem Konchem" singer="Nani"/>
                <Template imgStyle={squareImageStyle}image={Jingidi} name="Jingidi Jingidi" singer="Venkatesh"/>
                <Template imgStyle={squareImageStyle}image={Kutti} name="Kutti Story" singer="Vijay Thalapathy"/>
                <Template imgStyle={squareImageStyle}image={Govindha} name="Govindha Govindha" singer="Ravi Teja" link="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"/>
                <Template imgStyle={squareImageStyle}image={Dorikithe} name="Dorikithe Chasthavu" singer="RGV"/>
                <Template imgStyle={squareImageStyle}image={Mathuga} name="Mathuga Mathuga" singer="Kamal Hassan"/>
                <Template imgStyle={squareImageStyle}image={Rakaasi} name="Rakaasi Rakaasi" singer="NTR"/>
              </div>
              <div>
                <h1 style={{
                  color:"#fff",
                  marginTop:"0px"
                }}>
                 Popular artists
                </h1>
              </div>
              <div className="scrollable" style={{
                display:"flex",
                gap:"50px",
                marginLeft:"40px",
                marginBottom:"20px",
              }}>
                <Template imgStyle={circleImageStyle}image={Ar} name="AR Rahman" singer="Artist" link="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"/>
                <Template imgStyle={circleImageStyle}image={pri} name="Pritam" singer="Artist"/>
                <Template imgStyle={circleImageStyle}image={ari} name="Arjith Singh" singer="Artist"/>
                <Template imgStyle={circleImageStyle}image={sid} name="Sid Sriram" singer="Artist"/>
                <Template imgStyle={circleImageStyle}image={atif} name="Atif Aslam" singer="Artist" link="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"/>
                <Template imgStyle={circleImageStyle}image={ani} name="Anirudh Ravichandar" singer="Artist"/>
                <Template imgStyle={circleImageStyle}image={udit} name="Udit Narayan" singer="Artist"/>
                <Template imgStyle={circleImageStyle}image={yoyo} name="YoYo Honey Singh" singer="Artist"/>
              </div>
        </div>
        
      </div>
        </div>
    )
}
export default Home;