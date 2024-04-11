import React, { useState, useEffect } from "react";
import { apiURL } from "../util/Api";

import SearchInput from "../Search/SearchInput";
import FilterCountry from "../FilterCountry/FilterCountry";

import { Link } from "react-router-dom";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);

      if (!res.ok) throw new Error("Not found any country!");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`${apiURL}/region/${regionName}`);

      if (!res.ok) throw new Error("Failed..........");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center ">
      <div className="header flex ">
        <div className="container mt-5">
          <h2 className="font-bold text-3xl text-pink-600  m-5">Check Weather any where in the world</h2>
        </div>
      </div>
    <div className="country__top flex justify-between w-full p-3 m-3 rounded-lg shadow border bg-red-400 ">
      <div className="bg-white shadow p-1 rounded-lg">
        <SearchInput onSearch={getCountryByName} />
      </div>

      <div className="filte shadow p-1 rounded-lg">
        <FilterCountry  onSelect={getCountryByRegion} />
      </div>
    </div>

    <div className="country__bottom w-full">
      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && <h4>{error}</h4>}
      <div className="container mx-auto">
        <table className="min-w-full ">
          <thead>
            <tr className="bg-blue-400">
              <th className="py-2">Country</th>
              <th className="px-6 py-2">Capital</th>
              <th className="px-6 py-2">Region/Timezone</th>
            </tr>
          </thead>
          <tbody>
            {countries?.map((country, index) => (
              <tr key={index}>
                <td className="border bg-slate-300 text-center px-4 py-3">
                  <Link to={`/country/${country.name.common}`}>
                    {country.name.common}
                  </Link>
                </td>
                <td className="border bg-slate-300 text-center px-4 py-3">
                  <Link to={`/country/${country.name.common}`}>
                    {country.capital}
                  </Link>
                </td>
                <td className="border bg-slate-300 text-center px-4 py-3">
                  <Link to={`/country/${country.name.common}`}>
                    {country.region}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default AllCountries;
