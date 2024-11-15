import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';
import Video from '../../ui/Youtube/Video';
import { MovieListWrap } from './styled';
import { useSelector } from 'react-redux';

const MovieList = ({ movies }) => {
    const navigate = useNavigate();
    const { isLoginUser } = useSelector((state) => state.auth);
    return (
        <MovieListWrap>
            <h3 className='title-h3'>영상 콘텐츠</h3>
            <ul className='movie-list'>
                {movies
                    .slice()
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 4)
                    .map((movie) => (
                        <Video key={movie.movie_id} movie={movie} />
                    ))}
            </ul>
            <Button onClick={() => navigate(`/studio/${isLoginUser.user_id}/content`)}>
                콘텐츠 더 보기
            </Button>
        </MovieListWrap>
    );
};

export default MovieList;
