import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {

  const [imageSrc, setImageSrc] = useState("");

  const imageSelected = async (event)=>{
  
    /*const formData = new FormData();
    formData.append('titleImage', event.target.files[0]);

      try {
        let response = await axios.post('http://localhost:9000/imgUpload', formData,{headers: {"Content-Type": "multipart/form-data"}});
      } catch (error) {
          console.error('Error sending username:', error);
        }*/
  }


  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(selectedFile);

    try {
      axios.post('http://localhost:5000/uploadImage', formData)
    } catch (error) {
        console.error('Error geting data');
      }

  };

  const getData = async ()=>{
    try {
      await axios.get('http://localhost:5000/getImage').then(
        response=>{
          setImageSrc(response.data);
      });

    } catch (error) {
        console.error('Error geting data : ', error);
      }
  }

    return (
      <div>
        <input type="file" id="imageUpload" name="image" accept="image/*" onChange={handleImageUpload}></input>
        {imageSrc && <img src={imageSrc} width={100} height={100} alt="Uploaded"/>}
        <button onClick={getData}>Get Data</button>
      </div>
    );
};

export default YourComponent;
