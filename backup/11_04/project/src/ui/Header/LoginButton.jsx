import { useNavigate } from 'react-router-dom';
import { LoginButtonWrap } from './styled';

const LoginButton = () => {
    const navigate = useNavigate();
    return (
        <LoginButtonWrap className='login-menu' onClick={() => navigate('/login')}>
            <div className='account-wrap'>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/Account.svg'
                    alt='Account'
                />
            </div>
            <p className='login-btn'>로그인</p>
        </LoginButtonWrap>
    );
};

export default LoginButton;
