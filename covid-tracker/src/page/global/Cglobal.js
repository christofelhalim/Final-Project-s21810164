
import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../../App.css'
import NumberFormat from "react-number-format"

function Cglobal() {
  const [Cases, setCases] = useState("");
  const [Deaths, setDeaths] = useState("");
  const [Recovered, setRecovered] = useState("");
  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((response) => {
        setCases(response.data.confirmed.value);
        setDeaths(response.data.deaths.value);
        setRecovered(response.data.recovered.value);
      });
  }, []);


  return (
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


}
export default Cglobal;