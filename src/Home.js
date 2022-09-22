import React from "react";
import {useState, useEffect} from 'react'
import './Home.css'

function Home() {

    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`
    const [data, setData] = useState([])
   

    // useEffect(() => {
    //     fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => setData([data]))
    // }, [])
  


    const searchLocation = (event) => {
        if (event.key == 'Enter') {
            fetch(url)
            .then((response) => 
                response.json()
            )
            .then((data) => {
                setData(
                    data
                );
                console.log(data)
                

            })
            
        }
    }


    return (
        <div className="main">
            <div className="searchBar">
                <h3>Global Weather Forecast</h3>
                <input type="text" placeholder="Search" onChange={(e) => setLocation(e.target.value)} onKeyPress={searchLocation} />
            </div>

            <div className="data">
                <div className="table">
                    <table>
                        <tr>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>{data.main ? data.main.temp.toFixed(): null} °F</td>
                        </tr>
                    </table>
                </div>
                
            </div>
            
        </div>
    )
    

}

export default Home