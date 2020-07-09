import React from "react";

function Card({ date, GlobalData, CountryLatestData, selected }) {
  let data = null;

  if (CountryLatestData && selected !== "Global") {
    data = CountryLatestData[0];
  } else {
    data = GlobalData;
  }

  return (
    <div className="text-center">
      <div className="bg-info m-1 p-3 border border-primary d-inline-block w-25 text-center">
        <h1>Infected</h1>
        <p> {date}</p>
        <p> New Confirmed Cases: {data.NewConfirmed}</p>
        <p>Total Confirmed Cases: {data.TotalConfirmed}</p>
      </div>
      <div className="bg-success m-1 p-3 border border-primary d-inline-block w-25 text-center">
        <h1>Recovered</h1>
        <p> {date}</p>
        <p> New Recovered Cases: {data.NewRecovered}</p>
        <p>Total Recovered Cases: {data.TotalRecovered}</p>
      </div>
      <div className="bg-danger m-1 p-3 border border-primary d-inline-block w-25 text-center">
        <h1>Deaths</h1>
        <p> {date}</p>
        <p> New Death Cases: {data.NewDeaths}</p>
        <p>Total Death Cases: {data.TotalDeaths}</p>
      </div>
    </div>
  );
}

export default Card;
