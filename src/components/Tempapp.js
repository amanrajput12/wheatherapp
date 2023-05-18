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
    const minTempval = resJson.main.tem_min;
    const maxTemVal = resJson.main.temp_max;
    const cityVal =  resJson.name;
    const  weatherDetail = resJson.weather[0].main;
    const completeData ={minTem:minTempval,temp:tempVal,maxTem:maxTemVal,city:cityVal,weather:weatherDetail}
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
                <h2>{city.weather }</h2>
                <h1 className="temp">
                   {city.temp} 
                </h1>
                
                <h3 className="temp_min_max">{`${city.maxTem} min `}</h3>
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
