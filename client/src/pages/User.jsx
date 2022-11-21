import { useLocation } from 'react-router-dom';

export default function User () {
    const location = useLocation()
    const { nome, cognome, materie } = location.state
    console.log(materie);
  
    return (
        <div className={nome}>
        <h1>{nome} {cognome}</h1>
        {
          materie.map((val, key) => {
            if (val.state) {
              return <div key={key}><input type='checkbox' name={val.materia} value='1' checked disabled="disabled" /> <label htmlFor={val.materia}>{val.materia}</label></div>
            } else {
              return <div key={key}><input type='checkbox' name={val.materia} value='1' disabled="disabled" /> <label htmlFor={val.materia}>{val.materia}</label></div>
            }
            
          })
        }
        </div>
    );
  };