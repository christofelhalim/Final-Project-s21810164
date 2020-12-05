
import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../../App.css'
import NumberFormat from "react-number-format"

const Clocal = () => {
  const [Cases, setCases] = useState("");
  const [Deaths, setDeaths] = useState("");
  const [Recovered, setRecovered] = useState("");
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api")
     .then((response) => { 
     setCases(response.data.jumlahKasus);
     setDeaths(response.data.meninggal);
     setRecovered(response.data.sembuh);
    })
 }, []);


  return(
    <div className="kotak1">
    <h1 className="dataNumber1"><p>Infected</p>
      <NumberFormat value={Cases} thousandSeparator={true} displayType={'text'} />
    </h1>
    <h1 className="dataNumber2"><p>Deaths</p>
      <NumberFormat value={Deaths} thousandSeparator={true} displayType={'text'} />
    </h1>
    <h1 className="dataNumber3"><p>Recovered</p>
      <NumberFormat value={Recovered} thousandSeparator={true} displayType={'text'} />
    </h1>

  </div>
  
);

  
};
export default Clocal;