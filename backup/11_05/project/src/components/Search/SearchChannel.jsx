import { Button } from '../../ui/Button';

const SearchChannel = ({ channel }) => {
    const { channel_image, channel_name, channel_subscribers } = channel;
    // const { movie_channel } = movie;
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
                <img src={channel_image} alt="" className="channel-logo" />
            </div>
            <div className="channel-info">
                <div className="into-text">
                    <h3 className="name">{channel_name}</h3>
                    <p className="info">
                        @movie_channel • 구독자 {subscribers_conunt(channel_subscribers)}
                    </p>
                </div>
                <Button className="channel-btn">구독</Button>
            </div>
        </li>
    );
};

export default SearchChannel;
