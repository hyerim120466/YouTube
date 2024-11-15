import { useParams } from 'react-router-dom';
import { WatchWrap, WatchListWrap } from './styled';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SideMenuChange } from '../../store/modules/HeaderSlice';
import { getAllMovies } from '../../store/modules/channelSlice';
import Below from '../../components/watch/Below';
import WatchList from '../../components/watch/WatchList';
import { IsAddList } from '../../store/modules/authSlice';

const Watch = () => {
    const { isSideMenu } = useSelector((state) => state.header);
    const { allMovies } = useSelector((state) => state.channel);
    const { isLoginUser } = useSelector((state) => state.auth);
    const { Channel } = useSelector((state) => state.channel);
    const { Movie_ID } = useParams();
    const dispatch = useDispatch();

    // 유저가 선택한 동영상 찾기
    const thisMovie = allMovies.find((movie) => movie.movie_id === Number(Movie_ID));
    const thisChannel = thisMovie ? Channel[thisMovie.movie_channel] : null;

    useEffect(() => {
        if (!thisMovie) dispatch(getAllMovies());
        if (isSideMenu) dispatch(SideMenuChange());
        if (thisMovie) {
            document.title = thisMovie.movie_title;
            //시청기록 데이터 추가
            dispatch(
                IsAddList({
                    user_id: isLoginUser.user_id,
                    type: 'Viewing_Record',
                    movie: thisMovie,
                })
            );
        }
    }, [Movie_ID, allMovies, thisMovie, dispatch]);

    if (!Movie_ID || !thisMovie)
        return (
            <WatchWrap>
                <p>찾으시는 동영상이 없습니다.</p>
            </WatchWrap>
        );

    // 구독자 수 및 좋아요 수 포맷팅
    const formatNumber = (number) => {
        if (number >= 10000) {
            return Math.floor(number / 10000) + '만';
        } else if (number >= 1000) {
            return Math.floor(number / 1000) + '천';
        } else if (number <= 1000) {
            return number;
        }
        return number.toString();
    };

    if (allMovies)
        return (
            <WatchWrap>
                <div className='video-wrap'>
                    <div className='videoInner'>
                        {thisMovie.movie_video_type !== 'video' ? (
                            <iframe
                                src={thisMovie.movie_video}
                                title={thisMovie.movie_title}
                                allowFullScreen
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                autoPlay
                            />
                        ) : (
                            <video controls autoPlay muted src={thisMovie.movie_video}></video>
                        )}
                    </div>
                    <Below
                        title={thisMovie.movie_title}
                        movie_date={thisMovie.movie_date}
                        movieBody={thisMovie.movie_body}
                        channelName={thisChannel ? thisChannel.channel_name : '알 수 없음'}
                        channelSubscribers={
                            thisChannel
                                ? formatNumber(thisChannel.channel_subscribers)
                                : '알 수 없음'
                        }
                        movieLikeCount={formatNumber(thisMovie.movie_like_count)}
                        channelImage={thisChannel ? thisChannel.channel_image : ''}
                        moviesComment={thisMovie.movie_comments}
                        movie_id={thisMovie.movie_id}
                        movie_channel={thisMovie.movie_channel}
                        channel_name={
                            thisChannel?.Movies[0]?.movie_channel || thisChannel_channel_nav
                        }
                        channelId={thisChannel.channel_id}
                        movie={thisMovie}
                    />
                </div>
                <WatchListWrap>
                    <WatchList
                        currentVideoCategory={thisMovie.movie_category}
                        currentVideoId={thisMovie.movie_id}
                    />
                </WatchListWrap>
            </WatchWrap>
        );
};

export default Watch;
