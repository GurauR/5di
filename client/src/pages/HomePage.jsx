import { Link } from 'react-router-dom'

export default function HomePage() {
    return(
        <div className="home-page">
            <h1>Home Page</h1>
            <h2>
                <Link to="/5di/calendario" className='link'>Calendari Interrogazioni</Link><br /><br />
                <Link to="/5di/addInterrogazione" className='link'>Add Interrogazioni</Link><br /><br />
                <Link to="/5di/addUser" className='link'>Add Users</Link><br /><br />
                <Link to="/5di/usersList" className='link'>Studenti</Link><br /><br />
            </h2>
        </div>
    )
}