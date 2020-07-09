import React from "react";
import Link from "next/link";
import { getCountries } from "../api";

function CountrySelector({ handleCountryChange, data }) {
  const countries = data.map((obj) => {
    return (
      <option key={obj.ISO2} value={obj.Slug}>
        {obj.Country}
      </option>
    );
  });

  return (
    <div className="text-center mt-5">
      <select
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="Global">Global</option>
        {countries}
      </select>
    </div>
  );
}

export default CountrySelector;
