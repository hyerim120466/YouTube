import { Link, useParams } from 'react-router-dom';
import { ChannelWrap } from './styled';
import { useSelector } from 'react-redux';
import Channel_home from './Channel_home';
import Channel_video from './Channel_video';
import { useState } from 'react';
import Search_results from './Search_results';
// import { Button } from '../../ui/Button';

const Channel = () => {
    const { Channel_name } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [activeTab, setActiveTab] = useState('home'); // 현재 활성화된 탭 상태
    const [searchTerm, setSearchTerm] = useState('');

    //동영상 총 개수
    const videoCount = Channel[Channel_name].Movies.length;
    // 구독자수 n만명
    const formatSubscribers = (count) => {
        return count >= 10000 ? `${Math.floor(count / 10000)}만명` : `${count}명`;
    };
    //구독 토글
    const handleSubscribe = () => {
        setIsSubscribed(!isSubscribed);
    };
    return (
        <ChannelWrap>
            {/* 10-31 서희원님 작업 */}
            <div className='header_banner'>
                <div className='channel_banner'>
                    <img src={Channel[Channel_name].channel_banner} alt={Channel[Channel_name]} />
                </div>
            </div>
            <div className='page_header'>
                <div className='page_header_profile'>
                    <div className='header_left'>
                        <img
                            className='channel_img'
                            src={Channel[Channel_name].channel_image}
                            alt={Channel[Channel_name]}
                        />
                    </div>
                    <div className='header_right'>
                        <div className='channel_name'>{Channel[Channel_name].channel_name}</div>
                        <div className='channel_info'>
                            @{Channel_name} • 구독자{' '}
                            {formatSubscribers(Channel[Channel_name].channel_subscribers)} • 동영상{' '}
                            {videoCount}개
                            <div className='channel_desc'>
                                {' '}
                                {Channel[Channel_name].channel_introduction}
                            </div>
                            <button
                                className={isSubscribed ? 'subscribed_btn' : 'subscribe_btn'}
                                onClick={handleSubscribe}
                            >
                                {isSubscribed ? '구독중' : '구독'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='channel_navbar'>
                <ul className='inner'>
                    <li
                        className={activeTab === 'home' ? 'nav_active' : ''}
                        onClick={() => setActiveTab('home')}
                    >
                        홈
                    </li>
                    <li
                        className={activeTab === 'video' ? 'nav_active' : ''}
                        onClick={() => setActiveTab('video')}
                    >
                        동영상
                    </li>
                    {/* 검색 기능 추가 */}
                    <li className='channel_search'>
                        <button>
                            <img
                                src='https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Search.svg'
                                alt='영상검색'
                            />
                        </button>
                        <input
                            className='search_input'
                            type='text'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder='검색'
                        />
                    </li>
                </ul>
            </div>
            <div className='channel_content'>
                {searchTerm ? (
                    <Search_results searchTerm={searchTerm} /> // 검색어에 맞는 동영상 결과 표시
                ) : activeTab === 'home' ? (
                    <Channel_home />
                ) : (
                    <Channel_video />
                )}
            </div>
        </ChannelWrap>
    );
};

export default Channel;
