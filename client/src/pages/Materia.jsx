import { useLocation } from 'react-router-dom';

export default function Materia () {
    const location = useLocation()
    const { materia } = location.state
    console.log(materia);
  
    return (
        <div className={materia}>
            <h1>{materia}</h1>
            
        </div>
    );
  };