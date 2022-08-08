import React, { useState, useEffect } from "react";
import  "./App.css"

export default function App() {
   const [countries, setCountries] = useState([]);

  useEffect(() =>{
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      }, []);

  })

 
  return (
    <div className="container">
      <ul className="row">
        {countries.map((item,index)=>{
          return (
            <li key={index}>
              <div className="card">
                <div className="title">
                  <img src={item.flag} alt={item.name} />
                </div>
                <div className="card-body">
                  <div className="description">
                    <h2>{item.name} </h2>
                    <ol className="card-list">
                      <li>
                        ປະຊາກອນ:<span>{item.population}</span>
                      </li>
                      <li>
                        ພູມິພາກ:<span>{item.region}</span>
                      </li>
                      <li>
                        ເມືອງຫຼວງ:<span>{item.capital}</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          ); 

        })}
      </ul>
    </div>
  )
}
