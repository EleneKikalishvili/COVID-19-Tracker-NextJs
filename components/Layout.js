import Head from "next/head";
import CountrySelector from "./CountrySelector";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>COVID-19 Tracker</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        ></link>
      </Head>
      <div className="text-center mt-5">
        <h1 className="text-dark">COVID-19 Tracker</h1>
        <p className="text-center text-secondary mt-4">
          For detailed data choose country
        </p>
        <p className="text-center text-secondary">
          Some countries may not have detailed information
        </p>
        <h2 className="text-dark text-center">Latest Data</h2>
        {children}
      </div>
    </div>
  );
}

export default Layout;
