import { ChannelVideoWrap } from './styled';
import { Button } from '../../ui/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Video from '../../ui/Youtube/Video';

const Channel_video = () => {
    const { Channel_name } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    const [activeSort, setActiveSort] = useState('latest'); // 기본값 최신순

    // 현재 채널의 동영상 목록
    const videos = Channel[Channel_name].Movies;

    // 날짜 정보를 Date 객체로 변환하는 함수
    const getMovieDate = (movie) => {
        const { year, month, day } = movie.movie_date;
        return new Date(year, month - 1, day);
    };

    // 정렬 함수
    const getSortedVideos = () => {
        switch (activeSort) {
            case 'latest':
                // 최신순 정렬
                return [...videos].sort((a, b) => getMovieDate(b) - getMovieDate(a));
            case 'popular':
                // 인기순 정렬 (좋아요 수 기준)
                return [...videos].sort((a, b) => b.movie_like_count - a.movie_like_count);
            case 'date':
                // 오래된 순 정렬
                return [...videos].sort((a, b) => getMovieDate(a) - getMovieDate(b));
            default:
                return videos;
        }
    };

    const sortedVideos = getSortedVideos(); // 정렬된 동영상 목록

    return (
        <ChannelVideoWrap>
            <div className='channel_video_tab'>
                <button
                    className={`sort_btn ${activeSort === 'latest' ? 'active' : ''}`}
                    onClick={() => setActiveSort('latest')}
                >
                    {' '}
                    최신순{' '}
                </button>
                <button
                    className={`sort_btn ${activeSort === 'popular' ? 'active' : ''}`}
                    onClick={() => setActiveSort('popular')}
                >
                    {' '}
                    인기순{' '}
                </button>
                <button
                    className={`sort_btn ${activeSort === 'date' ? 'active' : ''}`}
                    onClick={() => setActiveSort('date')}
                >
                    {' '}
                    날짜순{' '}
                </button>
            </div>

            <div className='channel_videolist'>
                <div className='search_results-wrap'>
                    {sortedVideos.map((movie) => (
                        <Video key={movie.movie_id} movie={movie} />
                    ))}
                </div>
            </div>
        </ChannelVideoWrap>
    );
};
export default Channel_video;
