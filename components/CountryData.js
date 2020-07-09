import React, { useState, useEffect } from "react";
import DetailedCard from "./Cards/DetailedCard";
import { getCountryData } from "../api";

function CountryData({ countrySlug, data }) {
  const [CountryData, setCountryData] = useState(null);
  const [count, setCount] = useState(20);

  useEffect(() => {
    if (countrySlug)
      data(countrySlug).then((res) => setCountryData(res.slice(0, count)));
  }, [count, countrySlug]);

  let content = null;
  if (CountryData && countrySlug !== "Global") {
    content = CountryData.map((ob, i) => {
      return (
        <DetailedCard
          key={ob.Date}
          confirmed={ob.Confirmed}
          deaths={ob.Deaths}
          recovered={ob.Recovered}
          active={ob.Active}
          date={ob.Date}
          day={i + 1}
        />
      );
    });
  } else {
    content = <h3 className=" bg-light text-center p-3 ">No Data To Show</h3>;
  }

  return (
    <div className="text-center m-4 ">
      <p className="bg-secondary">20 days will be displayed by default</p>
      <div className="d-flex justify-content-center">
        <button onClick={() => setCount(count + 4)}>Display More</button>
        <p className="m-2">{count}</p>
      </div>
      <h2>{countrySlug.toUpperCase()}</h2>
      {content}
    </div>
  );
}

export default CountryData;
