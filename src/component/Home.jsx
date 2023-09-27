import "../component/Home.css";

import { React, useEffect, useState } from "react";
import logo from "./../logo.svg";

export default function Home() {
  const [imageUrl, setImageurl] = useState("");
  const [inputValue, setInputValue] = useState("");

  function onChange(e) {
    setInputValue(e.target.value);
  }

  // useEffect(() => {
  //   // setImageurl("/")
  //   // console.log(imageUrl,"url")
  // }, [imageUrl]);

  async function fetchData() {
    const encodedParams = new URLSearchParams();
    encodedParams.set("text", `${inputValue}`);

    const url = "https://open-ai21.p.rapidapi.com/texttoimage2";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "b9076a1794msh0313b8f4ae9404fp1b23a5jsnfb26084b05be",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      body: encodedParams,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result, "result");
      setImageurl(result.url);
 
    } catch (error) {
      console.error(error);
    }
  }
  console.log(imageUrl, "url");
  return (
    <div className="home-main-div">
      <div className="main-heading">
        <h1>AI Image Generator</h1>
      </div>
      <div className="img-div">
       {imageUrl?( <img src={imageUrl}  />) :null}
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
