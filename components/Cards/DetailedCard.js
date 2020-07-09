import React from "react";

function DetailedCard({ confirmed, deaths, recovered, active, date, day }) {
  return (
    <div className="bg-light m-3 p-3 border-primary d-inline-block w-25 ">
      <h2>Day N{day}</h2>
      <h3>{date}</h3>
      <p>Confirmed cases: {confirmed}</p>
      <p>Recovered cases: {recovered}</p>
      <p>Death cases: {deaths}</p>
      <p>Active cases: {active}</p>
    </div>
  );
}

export default DetailedCard;
