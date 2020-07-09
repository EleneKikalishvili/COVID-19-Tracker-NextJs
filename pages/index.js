import React, { useState } from "react";
import Layout from "../components/Layout";
import GlobalData from "../components/GlobalData";
import CountrySelector from "../components/CountrySelector";
import { getCountries, getGlobalData } from "../api";

export default function Home({ data, globalData }) {
  const [country, setCountry] = useState("");

  function handleCountryChange(countrySlug) {
    console.log(countrySlug);
    setCountry(countrySlug);
  }
  return (
    <Layout>
      <CountrySelector handleCountryChange={handleCountryChange} data={data} />
      <GlobalData countrySlug={country} data={globalData} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await getCountries();
  const globalData = await getGlobalData();
  console.log(globalData);
  return {
    props: {
      data,
      globalData,
    },
  };
}
