import { useEffect } from 'react';
import { Button } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import Popup from '../../ui/popup/Popup';
import { useSelector } from 'react-redux';

const SubscriptItem = ({ channel, handleChangeThisId, thisChannelID }) => {
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
    useEffect(() => {
        const modal = document.querySelector('#subscript-popup');
        if (thisChannelID === channel_id) {
            modal.showModal();
        }
    }, [thisChannelID, channel_id]);

    const handleShowPopup = (e) => {
        e.stopPropagation();
        handleChangeThisId(channel_id);
        const modal = document.querySelector('#subscript-popup');
        modal.showModal();
    };
    const handleClosePopup = (e) => {
        e.stopPropagation();
        const modal = document.querySelector('#subscript-popup');
        modal.close();
    };

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
                <Button className='icon-notification' onClick={handleShowPopup}>
                    <img
                        className='button-icon-notification'
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Notification.svg'
                        alt='notificaion'
                    />
                    구독중
                </Button>
            </div>
            {thisChannelID === channel_id && (
                <Popup
                    channel_name={channel_name}
                    handleClosePopup={handleClosePopup}
                    channel_id={channel_id}
                    thisChannelID={thisChannelID}
                />
            )}
        </li>
    );
};

export default SubscriptItem;
