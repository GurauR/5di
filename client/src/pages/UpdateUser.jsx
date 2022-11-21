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

const studenti = []

function UpdateUser() {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  const [matricola, setMatricola] = useState(0);
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [DIV, setDIV] = useState(false);
  const [GPI, setGPI] = useState(false);
  const [ING, setING] = useState(false);
  const [INI, setINI] = useState(false);
  const [IRC, setIRC] = useState(false);
  const [LIT, setLIT] = useState(false);
  const [MAT, setMAT] = useState(false);
  const [SMS, setSMS] = useState(false);
  const [SRI, setSRI] = useState(false);
  const [STO, setSTO] = useState(false);
  const [TPI, setTPI] = useState(false);
  
  const add = () => {
    axios.post('http://localhost:3001/insertUser', { matricola: matricola, nome: nome, cognome: cognome, DIV: DIV, GPI: GPI, ING: ING, INI: INI, IRC: IRC, LIT: LIT, MAT: MAT, SMS: SMS, SRI: SRI, STO: STO, TPI: TPI })
    
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/readUser`).then((response) => {
      
      console.log(response.data.length)
      for (let index = 0; index < response.data.length; index++) {
        studenti.push({label: response.data[index].cognome, value: index + 1, id: response.data[index]._id, matricola: response.data[index].matricola, nome: response.data[index].nome, cognome: response.data[index].cognome})
      }
      console.log(studenti)
      setUsers(studenti)
    })
    
  }, [])

  const updateUser = (id) => {
    console.log({ matricola: user.matricola, nome: user.nome, cognome: user.cognome, DIV: DIV, GPI: GPI, ING: ING, INI: INI, IRC: IRC, LIT: LIT, MAT: MAT, SMS: SMS, SRI: SRI, STO: STO, TPI: TPI })
    axios.put('http://localhost:3001/updateUser', {
      id: id,
      updatedUser: { matricola: user.matricola, nome: user.nome, cognome: user.cognome, DIV: DIV, GPI: GPI, ING: ING, INI: INI, IRC: IRC, LIT: LIT, MAT: MAT, SMS: SMS, SRI: SRI, STO: STO, TPI: TPI }
    })
  }
    
  return (
    <div>
      <Select options={users} onChange={(choice) => setUser({ matricola: choice.matricola, nome: choice.nome, cognome: choice.cognome, id: choice._id })}
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
              })} />
      
      <p>Matricola {user.matricola}</p>

      <p>Nome {user.nome}</p>
              
      <p>Cognome {user.cognome}</p>

      <input type="checkbox" name="materia1" onChange={(e) => setDIV(e.target.checked)} />
      <label for="materia1">DIV</label><br />
      
      <input type="checkbox" name="materia2" onChange={(e) => setGPI(e.target.checked)} />
      <label for="materia2">GPI</label><br />
      
      <input type="checkbox" name="materia3" onChange={(e) => setING(e.target.checked)} />
      <label for="materia3">ING</label><br />
      
      <input type="checkbox" name="materia4" onChange={(e) => setINI(e.target.checked)} />
      <label for="materia4">INI</label><br />
      
      <input type="checkbox" name="materia5" onChange={(e) => setIRC(e.target.checked)} />
      <label for="materia5">IRC</label><br />
      
      <input type="checkbox" name="materia6" onChange={(e) => setLIT(e.target.checked)} />
      <label for="materia6">LIT</label><br />
      
      <input type="checkbox" name="materia7" onChange={(e) => setMAT(e.target.checked)} />
      <label for="materia7">MAT</label><br />
      
      <input type="checkbox" name="materia8" onChange={(e) => setSMS(e.target.checked)} />
      <label for="materia8">SMS</label><br />
      
      <input type="checkbox" name="materia9" onChange={(e) => setSRI(e.target.checked)} />
      <label for="materia9">SRI</label><br />
      
      <input type="checkbox" name="materia10" onChange={(e) => setSTO(e.target.checked)} />
      <label for="materia10">STO</label><br />
      
      <input type="checkbox" name="materia11" onChange={(e) => setTPI(e.target.checked)} />
      <label for="materia11">TPI</label><br />

      <button onClick={() => updateUser(user.id)}>Enter</button><br />
      <Link to="/5di/calendario" className='link' onClick={() => this.putDataToDB(this.state.materia)}>Calendari Interrogazioni</Link>
    </div>
      
  );
  
}

export default UpdateUser;