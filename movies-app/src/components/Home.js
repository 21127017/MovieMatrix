import { Link } from 'react-router-dom';
import Ticket from './../images/movie.png';

const Home = () => {
    return (
        <>
        <div className='text-center'>
            <h2>Find a movie to watch tonight!</h2>
            <hr/>
            <Link to="/movies">
                <img src={Ticket} className='img-fluid img-thumbnail' alt='movie tickets'></img>
            </Link>
        </div>
        </>
    )
}

export default Home;