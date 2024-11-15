import { useDispatch } from 'react-redux';
import { Button } from '../../ui/Button';
import { AddNewSubscription } from '../../store/modules/authSlice';

const SearchChannel = ({ channel }) => {
    const dispatch = useDispatch();
    const { channel_image, channel_name, channel_subscribers, Movies } = channel;
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
        <li className="channel-item">
            <div className="channel-profile">
                <img src={channel_image} alt={channel_name} className="channel-logo" />
            </div>
            <div className="channel-info">
                <div className="into-text">
                    <h3 className="name">{channel_name}</h3>
                    <p className="info">
                        @{Movies[0].movie_channel} • 구독자
                        {subscribers_conunt(channel_subscribers)}
                    </p>
                </div>
                {/* 이거 해야 됨 */}
                <Button className="channel-btn" onClick={() => dispatch(AddNewSubscription)}>
                    구독
                </Button>
            </div>
        </li>
    );
};

export default SearchChannel;
