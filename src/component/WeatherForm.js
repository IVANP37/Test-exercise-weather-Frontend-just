import React from 'react';


const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <div className="card-header">
                    Enter the city:
                 </div>
                <input type="text" name="city" placeholder="City Name" className="form-control" autoFocus />
            </div>
            <div className="form-group">
                <div className="card-header">
                    Enter the contry:
                 </div>
                <input type="text" name="country" placeholder="Country Name" className="form-control" />
            </div>
            
            <button className="btn btn-primary btn-block">
                Show Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;