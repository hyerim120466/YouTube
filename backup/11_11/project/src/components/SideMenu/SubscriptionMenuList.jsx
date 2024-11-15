import { useSelector } from 'react-redux';
import LoginButton from '../../ui/Header/LoginButton';
import { useNavigate } from 'react-router-dom';
const SubscriptionMenuList = () => {
    const { Channel } = useSelector((state) => state.channel);
    const { isAuth, isLoginUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const thisChannel = Object.values(Channel).filter((channel) =>
        isLoginUser?.Subscription_Id?.includes(channel.channel_id)
    );
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
            ) : (
                thisChannel.map((channel) => (
                    <li
                        key={channel.channel_id}
                        className='thisChannel-item'
                        onClick={() =>
                            navigate(
                                `/channel/${
                                    channel.Movies[0]?.movie_channel || channel.channel_nav
                                }`
                            )
                        }
                    >
                        <img src={channel.channel_image} alt={channel.channel_name} />
                        <span className='name'>{channel.channel_name}</span>
                    </li>
                ))
            )}
        </ul>
    );
};

export default SubscriptionMenuList;
