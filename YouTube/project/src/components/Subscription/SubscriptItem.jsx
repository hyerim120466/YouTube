import { useEffect } from 'react';
import { Button } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import Popup from '../../ui/popup/Popup';
import { useSelector } from 'react-redux';
import SubscribersBtn from '../../ui/Subscribers/SubscribersBtn';

const SubscriptItem = ({ channel }) => {
    const {
        channel_id,
        channel_name,
        channel_image,
        channel_introduction,
        channel_subscribers,
        channel_nav,
        Movies,
    } = channel;
    const navigate = useNavigate();

    return (
        <li
            className='subscript-li'
            onClick={() => navigate(`/channel/${channel.Movies[0]?.movie_channel || channel_nav}`)}
        >
            <img className='subscript-li-img' src={channel_image} alt={channel_name} />
            <div className='subscript-channel-content'>
                <strong className='content-channel-name'>{channel_name}</strong>
                <span className='content-channel-engName'>
                    @{Movies[0]?.movie_channel || channel_nav}
                </span>
                <span className='content-channel-subscribers'>
                    구독자 {channel_subscribers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
                </span>
                <p className='content-channel-introduction'>{channel_introduction}</p>
            </div>

            <div className='subscript-icon'>
                <SubscribersBtn
                    channel_id={channel_id}
                    channel_name={channel_name}
                    thisChannel={channel}
                />
            </div>
        </li>
    );
};

export default SubscriptItem;
