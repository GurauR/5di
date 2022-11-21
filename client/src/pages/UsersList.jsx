import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';

export default function UsersList() {

  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/readUser`).then((response) => {
      setUser(response.data)
      console.log(response.data)
    })
    
  }, [])

  return(
      <div className="home-page">
          <h1>Studenti</h1>
          {
            user.map((val, key) => {
              return <h2 key={key}> 
                <Link to="/5di/user" state={{ nome: val.nome, cognome: val.cognome, materie: [{ materia: "DIV", state: val.DIV }, { materia: "GPI", state: val.GPI }, {materia: "ING", state: val.ING}, {materia: "INI", state: val.INI}, {materia: "IRC", state: val.IRC}, {materia: "LIT", state: val.LIT}, {materia: "MAT", state: val.MAT}, {materia: "SMS", state: val.SMS}, {materia: "SRI", state: val.SRI}, {materia: "STO", state: val.STO}, {materia: "TPI", state: val.TPI}] }} className='link'>{val.nome} {val.cognome}</Link>
                     </h2>
            })
          }
      </div>
  )
}