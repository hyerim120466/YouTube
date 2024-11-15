import { useNavigate } from 'react-router-dom';
const MobileMenuList = () => {
    const navigate = useNavigate();
    return (
        <ul className='menu-list'>
            <li className='btn-item' onClick={() => navigate(`/`)}>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Home_menu.svg'
                    alt='Home'
                />
                <p className='btn-name'>홈</p>
            </li>
            <li className='btn-item' onClick={() => navigate(`/feed/Playlist`)}>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Play_list.svg'
                    alt='Playlist'
                />
                <p className='btn-name'>재생목록</p>
            </li>
            <li className='btn-item' onClick={() => navigate(`/subscription`)}>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Subscription_menu.svg'
                    alt='Subscription'
                />
                <p className='btn-name'>구독</p>
            </li>
            <li className='btn-item' onClick={() => navigate(`/mypage`)}>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/Account.svg'
                    alt='myPage'
                />
                <p className='btn-name'>내페이지</p>
            </li>
        </ul>
    );
};

export default MobileMenuList;
