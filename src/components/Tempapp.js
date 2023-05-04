import React, { useEffect, useState } from "react";
import "./css/Style.css";
const Tempapp = () => {
  const [city, setCity] = useState("pune");
  const [search, setSearch] = useState("london");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=900c4a2db7569ebd1b40de3262daa5e5`;

      const response = await fetch(url);
      const resJson = await response.json();
    //   console.log(resJson);
    const main = resJson['main'];
        setCity(main)
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
                  
                  <i className="fa-solid fa-street-view"></i> {search}
                </h2>
                <h1 className="temp">
                   {city.temp} 
                </h1>
                <h3 className="temp_min_max">{`${city.temp_min} min `}</h3>
                <h3>{`${city.temp_max} max`}</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Tempapp;
