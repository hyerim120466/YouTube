import { UserLogout } from '../../store/modules/authSlice';
import { MyPageMenuWrap } from './styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyPageMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <MyPageMenuWrap>
            <li className='menu-item' onClick={() => navigate(`/feed/Download_List`)}>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Download.svg'
                    alt='Download'
                />
                <p className='name'>오프라인 저장 동영상</p>
            </li>
            <li className='menu-item' onClick={() => navigate('/feed/like_Movie_List')}>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Like_list.svg'
                    alt='Like_list'
                />
                <p className='name'>좋아요 표시한 동영상</p>
            </li>
            <li className='menu-item' onClick={() => dispatch(UserLogout())}>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/logout.svg'
                    alt='logout'
                />
                <p className='name'>로그아웃</p>
            </li>
        </MyPageMenuWrap>
    );
};

export default MyPageMenu;
