import { useDispatch, useSelector } from 'react-redux';
import { PopupWrap } from './styled';
import { DelSubscription } from '../../store/modules/authSlice';

const Popup = ({ handleClosePopup, channel_name, thisChannelID }) => {
    const dispatch = useDispatch();
    const { isLoginUser } = useSelector((state) => state.auth);
    return (
        <PopupWrap id='subscript-popup' className='popup-box'>
            <p className='popup-title'>{channel_name} 구독을 취소하시겠습니까?</p>
            <div className='popup-btns'>
                <button className='popup-close' onClick={handleClosePopup}>
                    취소
                </button>
                <button
                    className='popup-subscript-end'
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                            DelSubscription({
                                user_id: isLoginUser.user_id,
                                channel_id: thisChannelID,
                            })
                        );
                        handleClosePopup();
                    }}
                >
                    구독 취소
                </button>
            </div>
        </PopupWrap>
    );
};

export default Popup;
