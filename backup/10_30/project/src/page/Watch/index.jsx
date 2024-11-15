import { useParams } from 'react-router-dom';
import { WatchWrap } from './styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SideMenuChange } from '../../store/modules/HeaderSlice';
import { getAllMovies } from '../../store/modules/channelSlice';

const Watch = () => {
    const { isSideMenu } = useSelector((state) => state.header);
    const { allMovies } = useSelector((state) => state.channel);
    const { Movie_ID } = useParams();
    const dispatch = useDispatch();
    const thisMovie = allMovies.find((movie) => movie.movie_id === Number(Movie_ID));
    useEffect(() => {
        if (isSideMenu) dispatch(SideMenuChange());
        if (allMovies.length === 0) dispatch(getAllMovies());
        document.title = `${thisMovie.movie_title}`;
    }, [Movie_ID]);
    if (!Movie_ID || !thisMovie)
        return (
            <WatchWrap>
                <p>찾으시는 동영상이 없습니다.</p>
            </WatchWrap>
        );
    if (thisMovie)
        return (
            <WatchWrap>
                <div className='video-wrap'>
                    <iframe
                        src={thisMovie.movie_video}
                        title={thisMovie.movie_title}
                        allowfullscreen='true'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        autoPlay='1'
                    />
                </div>
            </WatchWrap>
        );
};

export default Watch;
