import { useSelector } from 'react-redux';
import LoginButton from '../../ui/Header/LoginButton';
const SubscriptionMenuList = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return (
        <ul className='subscription-wrap'>
            <p className='menu-title'>구독</p>
            {!isAuth ? (
                <>
                    <span className='not-login-span'>
                        로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.
                    </span>
                    <LoginButton />
                </>
            ) : null}
        </ul>
    );
};

export default SubscriptionMenuList;
