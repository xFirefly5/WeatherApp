import { useState } from "react";
import CityInput from "./CityInput";
import MainWindow from "./MainWindow";
import MoreDetails from "./MoreDetails";

import buildings from './assets/buildings.png';
import loading from './assets/loading.png';
import error from './assets/error.png';



function App() {
  const API_KEY = "e9a6418b01ae41f4a38155958241103";
  const BASE_URL = "https://api.weatherapi.com/v1/current.json";

  const [initial, setInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const [fetchErr, setFetchErr] = useState(null);

  const fetchDataFunc = async () => {
    setInitial(true);
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}&lang=en`);
      if (!response.ok) throw Error("Could not fetch the data..");
      const data = await response.json();
      setFetchData(data);
      setFetchErr(null);
    } catch (err) {
      // console.log(err.message);
      setFetchErr(err.message);
    } finally {
      setIsLoading(false);
      setInitial(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchDataFunc();
    setCity("");
   
  };

  return (
    <div className="App">
      <CityInput
        city={city}
        setCity={setCity}
        handleSubmit={handleSubmit}
      />

      {fetchData && initial && (
        <div className="MainWindow">
          <img className="weatherIcon" src={buildings} alt="" />
           <h3 className="noCity">No city selected</h3>
        </div>)
      }
      
      {!initial && isLoading &&
        <div className="MainWindow">
          <img className="weatherIcon" src={loading} alt="" />
          <h3>Loading Data</h3>
        </div>
      }

      {fetchErr && 
        <div className="MainWindow">
          <img className="weatherIcon" src={error} alt="" />
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h3 className="noCity" style={{ textAlign: "center" }}>{`${fetchErr}`}</h3>
            <span style={{ fontSize: "1.1rem" }}>Try without diacritics.</span>
          </div>
        </div>
      }

      {!initial && !isLoading && !fetchErr &&
        <MainWindow
          fetchData={fetchData}
        />
      }
      
      {!initial && !isLoading && !fetchErr &&
        <MoreDetails
          fetchData={fetchData}
        />
      }
    </div>
  )
}

export default App

