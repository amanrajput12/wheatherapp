import React, { useEffect, useState } from "react";
import "./css/Style.css";
const Tempapp = () => {
  const [city, setCity] = useState("pune");
  const [search, setSearch] = useState("pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=900c4a2db7569ebd1b40de3262daa5e5`;

      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
    const tempVal =  resJson.main.temp;
    const celsius = (tempVal - 273.15).toFixed(2);
    const minTemp = resJson.main.temp_min;
    const minTempVal =(minTemp-273.15).toFixed(3)
    
    

    const maxTem = resJson.main.temp_max;
    const maxTemVal = (maxTem-273.15).toFixed(3)

    const cityVal =  resJson.name;
    const  weatherDetail = resJson.weather[0].main;
    const completeData ={minTem:minTempVal,temp:celsius,maxTem:maxTemVal,city:cityVal,weather:weatherDetail}
        setCity(completeData)
    };

    fetchApi();
  });
 
  return (
    <>
    
      <div className="container">
        <div className="box">
          <div className="inputData">
            <input
              className="inputField"
              type="search"
              name=""
              id=""
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          {!city ? (
            <p>No Data found</p>
          ) : (
            <>
              <div className="info">
                <h2 className="location">
                  
                  <i className="fa-solid fa-street-view"></i> {city.city} 
                </h2>
                <h2>{city.weather}</h2>
                <h1 className="temp">
                   {city.temp} F
                </h1>
                
                <h3 className="temp_min_max">{`${city.minTem} min `}</h3>
                <h3>{`${city.maxTem} max`}</h3>
               
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Tempapp;
