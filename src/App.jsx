
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/WeatherInfo/WeatherInfo";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route  path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
