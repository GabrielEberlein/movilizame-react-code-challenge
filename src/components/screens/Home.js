import MoviesList from "../ui/MoviesList";
import SearchMovies from "../ui/SearchMovies";
import WatchList from "../ui/WatchList";

export default function Home () {
    return (
        <div>
            <h1>Peliculas para mirar</h1>
            <div>
                <SearchMovies />
                <MoviesList />
            </div>
            <div>
                <WatchList />
            </div>
            
        </div>
    )
}