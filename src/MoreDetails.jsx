import below from './assets/below.png'
import country from './assets/country.png'
import dateTime from './assets/dateTime.png'
import wind from './assets/wind.png'
import drop from './assets/drop.png'
import humidity from './assets/humidity.png'
import cloud from './assets/cloud.png'


function MoreDetails({fetchData}) {
    return (
        <> 
            {fetchData && <>
                    <h3 className="details">More details about the city<span><img src={below} alt=""/></span>:</h3>
                    <section className="moreDetails">
                        <div className="infoDiv">
                            <img src={country} alt=""/>
                            <p className="cityAndCountry">{fetchData.location.name}, {fetchData.location.region} | {fetchData.location.country}</p>
                        </div>
                        <div className="infoDiv">
                            <img src={dateTime} alt=""/>
                            <p className="dateAndTime">{fetchData.current.last_updated}</p>
                        </div>
                        <div className="infoDiv">
                            <img src={wind} alt=""/>
                            <p className="wind">{fetchData.current.wind_kph} km/h</p>
                        </div>
                        <div className="infoDiv">
                            <img src={drop} alt=""/>
                            <p className="precipitations">{fetchData.current.precip_mm} mm<sup>3</sup></p>
                        </div>
                        <div className="infoDiv">
                            <img src={humidity} alt=""/>
                            <p className="humidity">{fetchData.current.humidity} mm Hg</p>
                        </div>
                        <div className="infoDiv">
                            <img src={cloud} alt=""/>
                            <p className="cloud">{fetchData.current.cloud}%</p>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default MoreDetails