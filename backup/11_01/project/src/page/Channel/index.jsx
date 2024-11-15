import { Link, useParams } from 'react-router-dom';
import { ChannelWrap } from './styled';
import { useSelector } from 'react-redux';
import Channel_home from './Channel_home';
import { useState } from 'react';

const Channel = () => {
    const { Channel_name } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    const [isSubscribed, setIsSubscribed] = useState(false);

    console.log(Channel[Channel_name]);

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
                    <img
                        src={Channel[Channel_name].channel_banner}
                        alt={Channel[Channel_name]}
                    />
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
                            @{Channel_name} • 구독자 {formatSubscribers(Channel[Channel_name].channel_subscribers)} • 동영상 {videoCount}개
                            <div className='channel_desc'> {Channel[Channel_name].channel_introduction}</div>
                            <button className={isSubscribed ? 'subscribed_btn' : 'subscribe_btn'}
                onClick={handleSubscribe}>{isSubscribed ? '구독중' : '구독'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='channel_navbar'>
                <ul className='inner'>
                    {/* <li key={index}
                            className={activeChannelMenu === index ? 'nav_active' : ''}
                            onClick={() => handleChannelMenu(index)}>
                        <Link to={'/'}>홈</Link>
                    </li> */}
                    <li className='nav_active'>
                        <Link to={'/'}>홈</Link>
                    </li>
                    <li>
                        <Link to={'/'}>동영상</Link>
                    </li>
                </ul>
                
            </div>
            <Channel_home/>
            
        </ChannelWrap>
    );
};

export default Channel;
