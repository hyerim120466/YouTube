import { useDispatch, useSelector } from 'react-redux';
import { UserMenuWrap } from './styled';
import { useNavigate } from 'react-router-dom';
import { UserLogout } from '../../store/modules/authSlice';

const UserMenuList = () => {
    const { isAuth, isLoginUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavClike = (name) => {
        if (!isAuth) return;
        if (name === 'logout') {
            dispatch(UserLogout());
            navigate(`/`);
        } else if (name === 'studio') {
            navigate(`/studio/${isLoginUser.user_id}/dashboard`);
        } else {
            alert('error');
        }
    };
    if (isAuth && isLoginUser)
        return (
            <UserMenuWrap>
                <li onClick={() => handleNavClike('logout')} className='log-out'>
                    <img
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/logout.svg'
                        alt='logout'
                    />
                    로그아웃
                </li>
                <li onClick={() => handleNavClike('studio')} className='studio'>
                    <img
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/119e28bfa00f6df905130034043fd7183cdfc9f3/Icon/YouTube_studio.svg'
                        alt='studio'
                    />
                    Youtube 스튜디오
                </li>
            </UserMenuWrap>
        );
};

export default UserMenuList;
