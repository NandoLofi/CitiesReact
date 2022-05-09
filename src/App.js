// IMPORT useState
import React from 'react';
import imagesArr from './imageData';
import {useState} from 'react';
import "./styles.css"

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img)
  
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  
  const handleClick = (imageURL)=> {
    setBigImage({
      
    })
  }

  
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map((ele, index) =>{
    return <img className='thumb' src={ele.img} alt={ele.alt} city={ele.city} key={index} onClick={handleClick} />
  })
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
        {images}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
      </div>
    </div>
  );
}