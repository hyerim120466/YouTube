import { useParams } from 'react-router-dom';
import { WatchWrap, WatchListWrap } from './styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SideMenuChange } from '../../store/modules/HeaderSlice';
import { getAllMovies } from '../../store/modules/channelSlice';
import Below from '../../components/watch/Below';
import WatchList from '../../components/watch/WatchList';
import Comment from '../../components/watch/Comment';

const Watch = () => {
    const { isSideMenu } = useSelector((state) => state.header);
    const { allMovies } = useSelector((state) => state.channel);
    const { Movie_ID } = useParams();
    const dispatch = useDispatch();
    // 유저가 선택한 동영상 찾기
    const thisMovie = allMovies.find((movie) => movie.movie_id === Number(Movie_ID));

    useEffect(() => {
        if (isSideMenu) dispatch(SideMenuChange());
        if (allMovies.length === 0) dispatch(getAllMovies());
        if (thisMovie) {
            document.title = thisMovie.movie_title;
        }
    }, [Movie_ID, allMovies, thisMovie]);

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
                    <div className='videoInner'>
                        <iframe
                            src={thisMovie.movie_video}
                            title={thisMovie.movie_title}
                            allowFullScreen
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            autoPlay
                        />
                    </div>
                    <Below title={thisMovie.movie_title} />
                    <Comment />
                </div>
                <WatchListWrap>
                    <WatchList />
                </WatchListWrap>
            </WatchWrap>
        );
};

export default Watch;
