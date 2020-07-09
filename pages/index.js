import React, { useState } from "react";
import Layout from "../components/Layout";
import GlobalData from "../components/GlobalData";
import CountrySelector from "../components/CountrySelector";
import { getCountries, getGlobalData } from "../api";
import Link from "next/link";

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
      <Link href="/country-details">
        <button type="button" className="btn btn-dark m-5">
          see detailed info
        </button>
      </Link>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await getCountries();
  const globalData = await getGlobalData();
  return {
    props: {
      data,
      globalData,
    },
  };
}
