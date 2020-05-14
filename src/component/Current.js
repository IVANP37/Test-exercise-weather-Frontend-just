import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import WeatherFCinfo from './WeatherFCinfo';
import { WEATHER_KEY } from '../keys';

class Current extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: 0,      
        city: '',
        country: '',
        facecast: [],
        error: null
    };

    getWeather = async (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if (cityValue && countryValue) {
            // metric parameter is for Celcius Unit
            const API_URL_Current = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
            const respCurrent = await fetch(API_URL_Current);
            const dataCurrent = await respCurrent.json();
            console.log(dataCurrent);
            this.setState({
                temperature: dataCurrent.main.temp,
                description: dataCurrent.weather[0].description,
                humidity: dataCurrent.main.humidity,
                wind_speed: dataCurrent.wind.speed,                
                city: dataCurrent.name,
                country: dataCurrent.sys.country,
                error: null
            });
            
             const API_URL_forecast = `https://api.openweathermap.org/data/2.5/forecast/hourly?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}`;
             const resforecast = await fetch(API_URL_forecast);
             const dataforecast = await resforecast.json();
             console.log(dataforecast);
             this.setState({
                 facecast: dataforecast,
                 error: null
             });
            
        } else {
            this.setState({
                error: 'Please enter a City and a Country or check if the city corresponds to the country.'
            });
        }


    }
    getWeatherFacecast = async  (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;
        if (cityValue && countryValue) {          
             const API_URL_forecast = `https://api.openweathermap.org/data/2.5/forecast/hourly?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}`;
             const resforecast = await fetch(API_URL_forecast);
             const dataforecast = await resforecast.json();
             console.log(dataforecast);
             this.setState({
                 facecast: dataforecast,
                 error: null
             });
            
        } else {
            this.setState({
                error: 'Please enter a City and a Country or check if the city corresponds to the country.'
            });
        }
    }

    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                <div className="row">
                    <ol className="breadcrumb">
                        <li><a href="/"><svg className="glyph stroked home"></svg></a></li>
                        <li className="active">Imagenes</li>
                    </ol>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> Demo weather</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-body">

                                <div id="sidebar-collapse" classNameName="col-sm-3 col-lg-2 sidebar">
                                    <form onSubmit={this._handleSubmit}>
                                        <div className="col-sm-6">
                                            <div className="card" >
                                                <div className="card-body">

                                                    <WeatherForm
                                                        getWeather={this.getWeather}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card " >
                                                <div className="card-body">
                                                    <WeatherInfo {...this.state} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                        <div className="card " >
                                                <div className="card-body">
                                                    <WeatherFCinfo getWeatherFacecast={this.getWeatherFacecast} />
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Current;