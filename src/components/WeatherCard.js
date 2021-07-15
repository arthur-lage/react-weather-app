import React from 'react'
import '../styles/weather-card.scss'

import SunnyIcon from '../images/sunny.svg'
import CloudyIcon from '../images/cloudy.svg'
import RainyIcon from '../images/rainy.svg'

function WeatherCard({ cardInfo }){
	function defineWeatherIcon(status) {
		status = String(status)
		if (status.toLowerCase() === 'clear') return <img alt="Sunny Icon" src={SunnyIcon} />
		if (status.toLowerCase() === 'rain') return <img alt="Rainy Icon" src={RainyIcon}/>
		if (status.toLowerCase() === 'clouds') return <img alt="Cloudy Icon" src={CloudyIcon}/>
	}

	return (
		<div className="content-wrapper">
			{cardInfo ? (
				<div className="card">
					<div className="city-and-id">
						<div></div>
						<h2>{cardInfo.city}</h2>
						<p>{cardInfo.id}</p>
					</div>
					<div className="country">
						<p>{cardInfo.country}</p>
					</div>
					<div className="icon">
						{defineWeatherIcon(cardInfo.weatherStatus)}
					</div>
					<div className="temperatures">
						<div className="min">
							<p>Min</p>
							<h2>{cardInfo.minTemperature}</h2>
						</div>
						<div className="current">	
							<p>Current</p>
							<h2>{cardInfo.temperature}</h2>
						</div>
						<div className="max">
							<p>Max</p>
							<h2>{cardInfo.maxTemperature}</h2>
						</div>	
					</div>
				</div>
			) : (
				<div className="no-card">
					<h2>Try searching for a city in the field above!</h2>
				</div>
			)}
		</div>
	)
}

export default WeatherCard
