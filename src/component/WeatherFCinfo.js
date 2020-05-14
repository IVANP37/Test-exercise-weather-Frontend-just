import React from 'react';

const WeatherFCinfo = props => {
    console.log(props)
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.facecast ?
                <div className="card card-body mt-2 animated fadeInUp" >

                    {props.facecast.map((items =>

                        <th key="">
                            {items.facecast}
                        </th>

                    ))
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

export default WeatherFCinfo;