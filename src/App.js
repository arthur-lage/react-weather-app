import React, { useState } from 'react'

import './styles/global.scss'
import './styles/home.scss'

import WeatherCard from './components/WeatherCard'

function App() {
	const apiURL = `https://api.openweathermap.org/data/2.5/weather?`
	const apiKey = 'b031dc66f35f480500882227cd8180ad'

	const [search, setSearch] = useState('')

	const [cardInfo, setCardInfo] = useState()

	async function searchForCity(){
		try{
			const res = await fetch(`${apiURL}q=${search}&appid=${apiKey}`)
			const resData = await res.json()
			
			console.log(resData)

			setCardInfo({
				country: resData.sys.country,
				city: resData.name,
				temperature: `${kelvinToCelsius(resData.main.temp)}°C`,
				maxTemperature: `${kelvinToCelsius(resData.main.temp_max)}°C`,
				minTemperature: `${kelvinToCelsius(resData.main.temp_min)}°C`,
				id: `#${resData.id}`,
				weatherStatus: resData.weather[0].main 
			})
		} catch (err) {
			return alert("We could not find a city with this name.")
		}
	}

	function kelvinToCelsius(temp){
		return (Number(temp) - 273.15).toFixed(2)
	}

  return (
    <div className="app">
		<div className="search-wrapper">
			<input
				id="searchbar"
				onChange={(e) => {
					setSearch(e.target.value)
				}}
				onKeyUp={(e) => {
					e.key === 'Enter' && searchForCity()
				}}
				name="searchbar" 
				placeholder="Search for a city. Eg: New York"
			/>
			
			<button onClick={() => searchForCity()}>Search</button>
		</div>
		<WeatherCard cardInfo={cardInfo} />
	</div>
  );
}

export default App;
