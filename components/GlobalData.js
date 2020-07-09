import React, { useState, useEffect } from "react";
import { getGlobalData } from "../api";
import Card from "./Cards/Card";

function GlobalData({ countrySlug, data }) {
  const [loading, setLoading] = useState(true);
  const [CountryLatestData, setCountryLatestData] = useState(null);

  useEffect(() => {
    if (data) {
      setLoading(false);
      const countryObj = data.Countries.filter((obj) => {
        return obj.Slug === countrySlug;
      });
      if (countrySlug && countrySlug !== "Global") {
        setCountryLatestData(countryObj);
      }
    }
  }, [countrySlug]);

  return (
    <div className="text-center">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Card
          selected={countrySlug}
          date={data.Date}
          GlobalData={data.Global}
          CountryLatestData={CountryLatestData}
        />
      )}
    </div>
  );
}

export default GlobalData;
