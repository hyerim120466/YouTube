import { useEffect } from 'react';
import { YouTubeWrap } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies } from '../../store/modules/channelSlice';
import Video from '../../ui/Youtube/Video';

const YouTube = () => {
    const { allMovies } = useSelector((state) => state.channel);
    const dispatch = useDispatch();
    useEffect(() => {
        if (allMovies.length === 0) dispatch(getAllMovies());
        document.title = `YouTube`;
    }, []);
    return (
        <YouTubeWrap>
            <ul className='test-wrap'>
                {allMovies
                    .slice()
                    .sort(() => Math.random() - 0.5)
                    .map((movie) => (
                        <Video key={movie.movie_id} movie={movie} />
                    ))}
            </ul>
        </YouTubeWrap>
    );
};

export default YouTube;
