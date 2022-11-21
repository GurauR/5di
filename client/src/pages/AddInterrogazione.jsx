import React, { Component } from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

const materie = [
  { label: "DIV", value: 1 },
  { label: "GPI", value: 2 },
  { label: "ING", value: 3 },
  { label: "INI", value: 4 },
  { label: "IRC", value: 5 },
  { label: "LIT", value: 6 },
  { label: "MAT", value: 7 },
  { label: "SMS", value: 8 },
  { label: "SRI", value: 9 },
  { label: "STO", value: 10 },
  { label: "TPI", value: 11 },
];

function AddInterrogazione() {

  const [materia, setMateria] = useState("");
  const [date, setDate] = useState("");



  
  
  const add = () => {
    axios.post('http://localhost:3001/insertInterrogazione', { materia: materia, date: date })
  }
    
  return (
    <div>
      <Select options={materie} onChange={(choice) => setMateria(choice.label)}
        theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#343434',
                primary: 'white',
                neutral0: "#242424",
                neutral80: 'white',
              },
            })}/>
      <input type="date" onChange={(e) => setDate(e.target.value)} /><br />
      <button onClick={add}>Enter</button><br />
      <Link to="/5di/calendario" className='link' onClick={() => this.putDataToDB(this.state.materia)}>Calendari Interrogazioni</Link>
    </div>
      
  );
  
}

export default AddInterrogazione;