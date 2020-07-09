import React, { useState } from "react";
import Layout from "../../components/Layout";
import CountryData from "../../components/CountryData";
import CountrySelector from "../../components/CountrySelector";
import Link from "next/link";

import { getCountries, getCountryData } from "../../api";

function CountryDetails({ countryData, countries }) {
  const [country, setCountry] = useState("");

  function handleCountryChange(countrySlug) {
    console.log(countrySlug);
    setCountry(countrySlug);
  }
  return (
    <Layout>
      <CountrySelector
        data={countries}
        handleCountryChange={handleCountryChange}
      />
      <Link href="/">
        <button type="button" className="btn btn-dark m-5">
          Go Back
        </button>
      </Link>
      <CountryData
        countrySlug={country}
        data={(country) => getCountryData(country)}
      />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const countries = await getCountries();
  return {
    props: {
      countries,
    },
  };
}

export default CountryDetails;
