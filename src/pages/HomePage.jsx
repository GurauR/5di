import { Link } from 'react-router-dom'

export default function HomePage() {
    return(
        <div className="home-page">
            <h1>Home Page</h1>
            <h2>
                <Link to="/5di/calendario" className='link'>Calendari Interrogazioni</Link>
            </h2>
        </div>
    )
}