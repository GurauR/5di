import calendario from '../data/calendario.json'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Calendario() {

  const [interrogazioni, setInterrogazioni] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:3001/readInterrogazione`).then((response) => {
      setInterrogazioni(response.data)
      console.log(response.data)
    })
    
  }, [])

  return (
    <div className='calendario'>
        <h1>Calendario</h1>
      {
        interrogazioni.map((val, key) => {
          return <h2 key={key}> 
                  <Link to="/5di/materia" state={{ materia: val.materia }} className='link'>{val.materia} {val.date}</Link>
                 </h2>
        })
      }
        
    </div>
  )
  
}