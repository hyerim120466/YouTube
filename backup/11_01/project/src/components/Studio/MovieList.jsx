import Video from '../../ui/Youtube/Video';
import { MovieListWrap } from './styled';

const MovieList = ({ movies }) => {
    return (
        <MovieListWrap>
            <h3 className='title-h3'>최신 영상</h3>
            <ul className='movie-list'>
                {movies.map((movie) => (
                    <Video key={movie.movie_id} movie={movie} />
                ))}
            </ul>
        </MovieListWrap>
    );
};

export default MovieList;
