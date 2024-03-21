
function MainWindow({fetchData}) {
    return (
        <>
            {fetchData && (
                <div className="MainWindow">
                    <img className="weatherIcon" src={fetchData.current.condition.icon} alt="" />
                    <div className="divMainWindow">
                        <p className="day">Now in</p>
                        <h2>{fetchData.location.name}</h2>
                        <p className="temp">Temperature: {fetchData.current.temp_c}°C</p>
                        <p className="weather">{fetchData.current.condition.text}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default MainWindow