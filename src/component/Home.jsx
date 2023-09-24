import "../component/Home.css";

import { React, useEffect, useState } from "react";
import logo from "./../logo.svg";


export default function Home() {
  const [imageUrl, setImageurl] = useState("");
  const [inputValue, setInputValue] = useState("");
const[deafault,setDefault]= useState("false")
  function onChange(e) {
    setInputValue(e.target.value);
  }

  async function fetchData() {
    // try {
    //   const fetchImageData = await fetch(
    //     "https://open-ai21.p.rapidapi.com/texttoimage2",
    //     {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/x-www-form-urlencoded",
    //         "X-RapidAPI-Key":
    //           "b9076a1794msh0313b8f4ae9404fp1b23a5jsnfb26084b05be",
    //         "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    //       },

    //       body: JSON.stringify({
    //         prompt: `${inputValue}`,
    //         n: 1,
    //         size: "512*512",
    //       }),
    //     }
    //   );

    //   const response = await fetchImageData.json();

    //   console.log(response);
    // } catch (err) {
    //   return err;
    // }

    // const fetch = require('node-fetch');

const encodedParams = new URLSearchParams();
encodedParams.set('text', `${inputValue}`);

const url = 'https://open-ai21.p.rapidapi.com/texttoimage2';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'b9076a1794msh0313b8f4ae9404fp1b23a5jsnfb26084b05be',
    'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
  },
  body: encodedParams
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setImageurl(result.url)
console.log(imageUrl,"url")
    // setDefault(true)
} catch (error) {
	console.error(error);
}
  }
  return (
    <div className="home-main-div">
      <div className="main-heading">
        <h1>AI Image Generator</h1>
      </div>
      <div className="img-div">
        <img src={logo} alt="" />
      </div>
      <div className="input-div">
        <input
          type="text"
          className="search-input"
          placeholder="Search for the image"
          onChange={onChange}
        />
        <button className="generate-btn" onClick={fetchData}>
          {" "}
          Generate
        </button>
      </div>
    </div>
  );
}
