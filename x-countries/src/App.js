import Template from './Components/Template';
import {data} from './Api/Api';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countryInfo, setCountryInfo] = useState([])
  useEffect(()=>{
    let getData = async()=>{
      try {
        const countryData = await data()
        console.log(countryData);
        console.log(countryData[0].name.common);
        setCountryInfo(countryData)
      } catch (error) {
        console.log(error);
      }
    }
    
    getData()}, []
    )
  return (
    <div className='template-container'>
      {countryInfo.map((el, i)=><Template id={i} title={el.name.common} src={el.flags.png} alt={el.flags.alt} />)}
    </div>
  );
}

export default App;
