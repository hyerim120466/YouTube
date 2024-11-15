import { useNavigate } from 'react-router-dom';
import SubscribersBtn from '../../ui/Subscribers/SubscribersBtn';

const SearchChannel = ({ channel }) => {
    const navigate = useNavigate();
    const { channel_image, channel_name, channel_subscribers, Movies, channel_id, channel_nav } =
        channel;

    const subscribers_conunt = (channel_subscribers) => {
        if (channel_subscribers >= 10000) {
            return Math.floor(channel_subscribers / 10000) + '만명';
        } else if (channel_subscribers >= 1000) {
            return Math.floor(channel_subscribers / 1000) + '천명';
        } else if (channel_subscribers <= 1000) {
            return channel_subscribers + '명';
        }
    };

    return (
        <li
            className='channel-item'
            onClick={() => navigate(`/channel/${Movies[0]?.movie_channel || channel_nav}`)}
        >
            <div className='channel-profile'>
                <img src={channel_image} alt={channel_name} className='channel-logo' />
            </div>
            <div className='channel-info'>
                <div className='into-text'>
                    <h3 className='name'>{channel_name}</h3>
                    <p className='info'>
                        @{Movies[0]?.movie_channel || channel_nav} • 구독자
                        {subscribers_conunt(channel_subscribers)}
                    </p>
                </div>
                <SubscribersBtn channel_id={channel_id} channel_name={channel_name} />
            </div>
        </li>
    );
};

export default SearchChannel;
