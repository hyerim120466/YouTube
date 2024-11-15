import { useDispatch, useSelector } from 'react-redux';
import { PopupWrap } from './styled';
import { DelSubscription } from '../../store/modules/authSlice';
import { IsMovieChangeSubscriber } from '../../store/modules/channelSlice';
import { isSubscribersFalse } from '../../store/modules/subscribersSlice';
import { useMouseOutside } from '../../hook/useMouseOutside';
import { isSavePopTrue } from '../../store/modules/savePopupSlice';

const Popup = () => {
    const dispatch = useDispatch();
    const { isLoginUser } = useSelector((state) => state.auth);
    const { thisChannel } = useSelector((state) => state.subscribers);
    const wrapRef = useMouseOutside(() => dispatch(isSubscribersFalse()));

    if (thisChannel)
        return (
            <PopupWrap id='subscript-popup' className='popup-box'>
                <p className='popup-title'>{thisChannel?.channel_name} 구독을 취소하시겠습니까?</p>
                <div className='popup-btns' ref={wrapRef}>
                    <button className='popup-close' onClick={() => dispatch(isSubscribersFalse())}>
                        취소
                    </button>
                    <button
                        className='popup-subscript-end'
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(isSubscribersFalse());
                            dispatch(isSavePopTrue(`${thisChannel.channel_name} 채널 구독 취소`));
                            dispatch(
                                DelSubscription({
                                    user_id: isLoginUser.user_id,
                                    channel_id: thisChannel?.channel_id,
                                })
                            );
                            dispatch(
                                IsMovieChangeSubscriber({
                                    channel_name: thisChannel?.channel_nav,
                                    type: 'minus',
                                })
                            );
                        }}
                    >
                        구독 취소
                    </button>
                </div>
            </PopupWrap>
        );
};

export default Popup;
