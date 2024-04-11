
import { Link, useParams } from "react-router-dom";
import { UilBrightness,
  UilTemperatureEmpty,
  UilCompressLines,
  UilCloudComputing,
  UilClouds,
  UilThermometer,
  UilWind } from '@iconscout/react-unicons'
import axios from "axios";
import { useEffect, useState } from "react";


const CountryInfo = () => {
  const [inputCity,setInputCity]=useState("")
  const [data,setData] = useState({})
  const { countryName } = useParams();


const apiKey = "bfec2e77c68ea49513b54411b1173a73"
const getWetherDetails = (cityName) => {
  if (!cityName) return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
  axios.get(apiURL).then((res) => {
  
    setData(res.data)
  }).catch((err) => {
    console.log("err", err)
  })
}
console.log(data)
const handleChangeInput =(e)=>{
      setInputCity(e.target.value)
}

const handleSearch =()=>{
  getWetherDetails(inputCity)
}

useEffect(()=>{
  const apiKey = "bfec2e77c68ea49513b54411b1173a73"
const getWetherDetails = () => {
 
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + countryName + "&appid=" + apiKey
  axios.get(apiURL).then((res) => {
   
    setData(res.data)

  }).catch((err) => {
    console.log("err", err)
  })
}
getWetherDetails()
console.log(countryName)
},[countryName])

  return (
    <div className="mt-10">
     
     <div className=" container bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded max-lg shadow mx-auto flex flex-col justify-center items-center ">
     <div className="header mt-5">
          <h2 className="font-bold text-3xl text-white  m-5">Weather </h2>
      </div>
      <div className="flex flex-row">
        <input type="text"
        value={inputCity}
        onChange={handleChangeInput}
        placeholder="search country or city..." 
        className="rounded p-2  focus:outline-none"/>
        <button className="mx-10  p-2  px-5 rounded text-white shadow bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-pink-500 hover:to-yellow-500"
        onClick={handleSearch}>
            Search 
        </button>
      </div>
      <div className="mt-10 flex flex-col items-center ">
      <UilBrightness size="90" className="w-30 text-white "/>
      <h1 className="text-white text-4xl">{data?.name}
      </h1>
      </div>
     <div className="flex flex-row gap-14 my-10">
     <div className="mx-auto">
      <div className="text-white text-2xl my-2 flex flex-row">
       <UilTemperatureEmpty size={40} className="text-green-500 mx-1"/>Tempterature : {((data?.main?.temp)-273.15).toFixed(2)}°C
      </div>
      <div className="text-white text-2xl flex flex-row my-2 ">
      <UilTemperatureEmpty size={40} className="text-red-500 mx-1"/>
        Max Temp : {((data?.main?.temp_max)-273.15).toFixed(2)}°C
      </div>
      <div className="text-white text-2xl flex flex-row my-2">
        <UilCloudComputing size={40} className="text-red-300 mx-1"/>
       Humidity : {data?.main?.humidity}
      </div>
      <div className="text-white text-2xl flex flex-row my-2">
      <UilCompressLines size={40} className="text-blue-500 mx-1"/>
       Pressure : {data?.main?.pressure} Pa
      </div>
      </div>
      <div className="">
      <div className="text-white text-2xl flex flex-row my-2">
        <UilThermometer size={40} className="text-blue-400 mx-1"/>
        Feels Like : {((data?.main?.feels_like)-273.15).toFixed(2)}°C
      </div>
      <div className="text-white text-2xl flex flex-row my-2">
      <UilTemperatureEmpty size={40} className="text-yellow-500 mx-1"/>
          Min Temp : {((data?.main?.temp_min)-273.15).toFixed(2)}°C
      </div>
      <div className="text-white text-2xl flex flex-row my-2">
        <UilClouds size={40} className="text-green-500 mx-1"/>
        visibility :  {data?.visibility}
      </div>
      <div className="text-white text-2xl my-2 flex flex-row">
        <UilWind size={40} className="text-blue-600 font-bold mx-1"/> Wind Speed : {data?.wind?.speed}
      </div>
      </div>
     </div>
   </div>
   </div>
  );
};

export default CountryInfo;
