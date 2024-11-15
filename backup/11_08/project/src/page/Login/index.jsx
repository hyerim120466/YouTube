import { LoginWrap } from './styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import LoginForm from '../../components/Login/LoginForm';
import QuickLogin from '../../components/Login/QuickLogin';
import { useNavigate } from 'react-router-dom';
import JoinForm from '../../components/Login/JoinForm';

const Login = () => {
    const { isAuth } = useSelector((state) => state.auth);
    const [pageType, setPageType] = useState('quickLogin');
    const [loginCheck, setLoginCheck] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    return (
        <LoginWrap>
            <div className='login-container'>
                <div className='left-con-box'>
                    <div className='logo-wrap'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg' />
                    </div>
                    <h2 className='title'>
                        {pageType === 'quickLogin' && '계정 선택'}
                        {pageType === 'login' && '로그인'}
                        {pageType === 'join' && '계정 생성'}
                    </h2>
                    <p className='nav-youtube' onClick={() => navigate('/')}>
                        YouTube로 이동
                    </p>
                </div>
                <div className='right-con-box'>
                    {pageType === 'quickLogin' && <QuickLogin setPageType={setPageType} />}
                    {pageType === 'login' && (
                        <LoginForm
                            loginCheck={loginCheck}
                            setLoginCheck={setLoginCheck}
                            setPageType={setPageType}
                        />
                    )}
                    {pageType === 'join' && <JoinForm setPageType={setPageType} />}
                </div>
            </div>
        </LoginWrap>
    );
};

export default Login;
