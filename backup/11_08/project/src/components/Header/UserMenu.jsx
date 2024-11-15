import { useSelector } from 'react-redux';

const UserMenu = () => {
    const { isLoginUser } = useSelector((state) => state.auth);
    return (
        <div className='user-menu'>
            <a href='#'>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Making_video.svg'
                    alt='MakingVideo'
                />
            </a>
            <a href='#'>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Notification.svg'
                    alt='Notification'
                />
            </a>
            <a href='#'>
                <span className='user-profile'>{isLoginUser.user_name.charAt(0)}</span>
            </a>
        </div>
    );
};

export default UserMenu;
