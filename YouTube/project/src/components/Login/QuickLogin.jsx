import { useLocation, useNavigate } from 'react-router-dom';
import { QuickLoginWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../../store/modules/authSlice';
import { isSavePopTrue } from '../../store/modules/savePopupSlice';

const QuickLogin = ({ setPageType }) => {
    const { LoginUser } = useSelector((state) => state.auth);
    const randomLoginUser = LoginUser.filter((user) => typeof user.user_id === 'number')
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (user) => {
        alert(`${user.user_name}님 로그인`);
        dispatch(
            UserLogin({
                user_email: user.user_email,
                user_password: user.user_password,
            })
        );
        dispatch(isSavePopTrue(`${user.user_name}님 로그인`));
        if (
            location.pathname.startsWith('/studio') ||
            location.pathname.startsWith('/login') ||
            location.pathname.startsWith('/join')
        ) {
            navigate(`/`);
        } else {
            navigate(-1);
        }
    };

    return (
        <QuickLoginWrap>
            {randomLoginUser.map((user) => (
                <li key={user.user_id} className='login-item' onClick={() => handleLogin(user)}>
                    <div className='profile-wrap'>
                        <span className='user-profile'>{user.user_name.charAt(0)}</span>
                    </div>
                    <div className='text-wrap'>
                        <p className='user-name'>{user.user_name}</p>
                        <p className='user-email'>{user.user_email}</p>
                    </div>
                </li>
            ))}
            <li className='login-item' onClick={() => setPageType('login')}>
                <div className='account-wrap'>
                    <img
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Account.svg'
                        alt='Account'
                    />
                </div>
                <div className='text-wrap'>
                    <p>다른 계정 사용</p>
                </div>
            </li>
        </QuickLoginWrap>
    );
};

export default QuickLogin;
