import React, {useEffect, useState } from 'react';
import axios from "axios"
import NumberFormat from "react-number-format";

const CProvinsi = () => {
  const [DataProvinsi, setDataListProvinsi] = useState([]);
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
     .then((response) => { 
     setDataListProvinsi(response.data.data);
    })  
 }, []);
    console.log(DataProvinsi);
  return(
    <table border="1" className = "tengah">
    <tr>
        <th>No</th>
        <th>Province</th>
        <th>Cases</th>
        <th>Recovered</th>
        <th>Deaths</th>
    </tr>
                    {DataProvinsi.map((item, index) => {
                    return(
                        <tr>
                            <th scope="row" key={item.fid}>{index + 1}</th>
                            <th>{item.provinsi}</th>
                            <th><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
                            <th><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
                            <th><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
                        </tr>
                        )
                })}
    </table>
  );
}

export default CProvinsi;