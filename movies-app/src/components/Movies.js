import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect( () => {
        let moviesList = [
            {
                id: 1,
                title: "highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "I dont know what to write",
            },
            {
                id: 2,
                title: "Raises of the Lost Ark",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "PG-13",
                description: "I dont know what to write",
            },
        ];

        setMovies(moviesList)
    }, []);

    return (
        <div>
            <h2>Movies!</h2>
            <hr/>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movies/${m.id}`}>
                                    {m.title}
                                </Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Movies;