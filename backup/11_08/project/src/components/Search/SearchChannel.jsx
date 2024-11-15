import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../ui/Button';
import { AddNewSubscription } from '../../store/modules/authSlice';
import Popup from '../../ui/popup/Popup';
import { useNavigate } from 'react-router-dom';

const SearchChannel = ({ channel }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoginUser } = useSelector((state) => state.auth);
    const { channel_image, channel_name, channel_subscribers, Movies, channel_id } = channel;
    const isSubscribed = isLoginUser?.Subscription_Id?.includes(channel_id);

    const subscribers_conunt = (channel_subscribers) => {
        if (channel_subscribers >= 10000) {
            return Math.floor(channel_subscribers / 10000) + '만명';
        } else if (channel_subscribers >= 1000) {
            return Math.floor(channel_subscribers / 1000) + '천명';
        } else if (channel_subscribers <= 1000) {
            return channel_subscribers + '명';
        }
    };

    const handleSubscribeClick = (e) => {
        e.stopPropagation();
        // 구독 안 되어 있으면 구독 추가
        dispatch(
            AddNewSubscription({
                user_id: isLoginUser.user_id,
                channel_id,
            })
        );
    };
    const handleShowPopup = (e) => {
        e.stopPropagation();
        const modal = document.querySelector('#subscript-popup');
        modal.showModal();
    };
    const handleClosePopup = () => {
        const modal = document.querySelector('#subscript-popup');
        modal.close();
    };

    return (
        <li
            className='channel-item'
            onClick={() => navigate(`/channel/${Movies[0].movie_channel}`)}
        >
            <div className='channel-profile'>
                <img src={channel_image} alt={channel_name} className='channel-logo' />
            </div>
            <div className='channel-info'>
                <div className='into-text'>
                    <h3 className='name'>{channel_name}</h3>
                    <p className='info'>
                        @{Movies[0].movie_channel} • 구독자
                        {subscribers_conunt(channel_subscribers)}
                    </p>
                </div>
                {isSubscribed ? (
                    <Button className='subscribers-btn' onClick={handleShowPopup}>
                        <img
                            src='https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Notification.svg'
                            alt='구독 중'
                            className='img'
                        />
                        구독중
                    </Button>
                ) : (
                    <Button className='not-subscribers-btn' onClick={handleSubscribeClick}>
                        구독
                    </Button>
                )}
                {/* 수정 필요 */}
                <Popup
                    handleClosePopup={handleClosePopup}
                    channel_name={channel_name}
                    thisChannelID={channel_id}
                />
            </div>
        </li>
    );
};

export default SearchChannel;
