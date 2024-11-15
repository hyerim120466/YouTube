import { useSelector } from 'react-redux';
import Video from '../../ui/Youtube/Video';

const WatchList = ({ currentVideoCategory, currentVideoId }) => {
    const { allMovies } = useSelector((state) => state.channel);
    // 현재 재생 중인 영상과 같은 카테고리의 영화만 필터링

    const filteredMovies = allMovies
        .filter((movie) => movie.movie_category === currentVideoCategory)
        .filter((movie) => movie.movie_id !== currentVideoId);

    return (
        <ul className='sub_video_wrap'>
            {filteredMovies
                .slice()
                .sort(() => Math.random() - 0.5)
                .slice(0, 15) // 최대 15개만 표시
                .map((movie) => (
                    <Video key={movie.movie_id} movie={movie} />
                ))}
        </ul>
    );
};

export default WatchList;
