import React from 'react';
import Fahrenheit from './svg/fahrenheit.svg';
import Weather from './svg/weather.svg';
import Paper from './svg/paper.svg';
import Social from './svg/social.svg';
const WeatherInfo = props => {
    console.log(props)
    return (

        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    <h3>WEATHER CURRENT  </h3>
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i><img src={Social} />  Location: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i><img src={Fahrenheit} /> Temperature: {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> <img src={Weather} />Humidity: {props.humidity}</p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> <img src={Paper}/> Wind Speed: {props.wind_speed}</p>
                    }                   
                </div>
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x">
                        
                    </i>
                </div>
            }
            
        </div>

    )
}

export default WeatherInfo;