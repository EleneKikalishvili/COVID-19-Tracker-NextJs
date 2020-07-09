const baseUrl = "https://api.covid19api.com/";

async function getData(endPoint) {
  const response = await fetch(`${baseUrl}${endPoint}`);
  const data = await response.json();
  return data;
}

export function getCountries() {
  return getData("countries");
}

export function getCountryData(countrySlug) {
  return getData(`total/dayone/country/${countrySlug}`);
}

export function getGlobalData() {
  return getData("summary");
}
