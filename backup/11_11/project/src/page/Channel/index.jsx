import { useParams } from 'react-router-dom';
import { ChannelWrap } from './styled';
import { useSelector } from 'react-redux';
import Channel_home from './Channel_home';
import Channel_video from './Channel_video';
import { useState } from 'react';
import Search_results from './Search_results';
import SubscribersBtn from '../../ui/Subscribers/SubscribersBtn';

const Channel = () => {
    const { Channel_name } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    const [activeTab, setActiveTab] = useState('home'); // 현재 활성화된 탭 상태
    const [searchTerm, setSearchTerm] = useState('');

    const thisChannel = Channel[Channel_name];
    //동영상 총 개수
    const videoCount = thisChannel?.Movies.length;
    // 구독자수 n만명
    const formatSubscribers = (count) => {
        return count >= 10000 ? `${Math.floor(count / 10000)}만명` : `${count}명`;
    };

    if (!thisChannel)
        return (
            <ChannelWrap>
                <p>"{Channel_name}" 찾으시는 채널이 없습니다.</p>
            </ChannelWrap>
        );
    if (thisChannel)
        return (
            <ChannelWrap>
                {/* 10-31 서희원님 작업 */}
                <div className='header_banner'>
                    <div className='channel_banner'>
                        <img src={thisChannel.channel_banner} alt={thisChannel} />
                    </div>
                </div>
                <div className='page_header'>
                    <div className='page_header_profile'>
                        <div className='header_left'>
                            <img
                                className='channel_img'
                                src={thisChannel.channel_image}
                                alt={thisChannel}
                            />
                        </div>
                        <div className='header_right'>
                            <div className='channel_name'>{thisChannel.channel_name}</div>
                            <div className='channel_info'>
                                @{Channel_name} • 구독자{' '}
                                {formatSubscribers(thisChannel.channel_subscribers)} • 동영상{' '}
                                {videoCount}개
                                <div className='channel_desc'>
                                    {' '}
                                    {thisChannel.channel_introduction}
                                </div>
                                <SubscribersBtn
                                    channel_id={thisChannel.channel_id}
                                    channel_name={thisChannel.channel_name}
                                />
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
