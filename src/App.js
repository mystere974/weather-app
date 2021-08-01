import React from 'react';
import { useState } from 'react';

import './App.css';

const api = {
  key: "0b38fbb72a4c8ae704f364f855d6c9f0",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState ();

  const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
          .then(resp => resp.json())
          .then(data => setWeather(data))
      }



  }



  const dateToday = (element) => {
    let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    let day = days[element.getDay()];
    let date = element.getDate();
    let month = months[element.getMonth()];
    let year = element.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div>
      <section>
        <div>
          <input type="text" placeholder="ville/pays?" />

          <div>
            {dateToday(new Date())}
          </div>


        </div>



      </section>
    </div>
  );
}

export default App;
