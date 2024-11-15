import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { LoginFormWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../../store/modules/authSlice';
import { useState } from 'react';

const LoginForm = ({ loginCheck, setLoginCheck, setPageType }) => {
    const { LoginUser } = useSelector((state) => state.auth);
    const [user, setUser] = useState({ user_email: '', user_password: '' });
    const [idChk, setIdChk] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (
            LoginUser.find(
                (login) =>
                    login.user_email === user.user_email &&
                    login.user_password === user.user_password
            )
        ) {
            dispatch(UserLogin(user));
            if (
                location.pathname.startsWith('/studio') ||
                location.pathname.startsWith('/login') ||
                location.pathname.startsWith('/join')
            ) {
                navigate(`/`);
            } else {
                navigate(-1);
            }
        } else {
            setLoginCheck(true);
            return;
        }
    };

    const handleIdChk = (e) => {
        e.preventDefault();
        if (!user.user_email) {
            alert('아이디를 입력해 주세요');
        } else {
            setIdChk(!idChk);
        }
    };

    return (
        <LoginFormWrap className='login-box' onSubmit={onSubmit}>
            {!loginCheck ? (
                <p className='login-input'>
                    <input
                        type='email'
                        name='user_email'
                        placeholder='이메일'
                        onChange={changeInput}
                    />
                    <input
                        type='password'
                        name='user_password'
                        placeholder='비밀번호'
                        onChange={changeInput}
                        className={idChk ? 'password active' : 'password'}
                    />
                </p>
            ) : (
                <p className='failed-input'>
                    <label htmlFor=''>이메일 또는 비밀번호가 잘못 입력되었습니다.</label>
                    <input
                        type='email'
                        name='user_email'
                        placeholder='이메일'
                        onChange={changeInput}
                    />
                    <input
                        type='password'
                        name='user_password'
                        placeholder='비밀번호'
                        onChange={changeInput}
                        className={idChk ? 'password active' : 'password'}
                    />
                </p>
            )}
            <div className='btn-wrap'>
                {idChk ? (
                    <Button className='login-btn' type='submit'>
                        로그인
                    </Button>
                ) : (
                    <Button className='login-btn' onClick={handleIdChk}>
                        다음
                    </Button>
                )}
                <Button
                    className='join-btn'
                    onClick={(e) => {
                        e.preventDefault();
                        setPageType('join');
                    }}
                >
                    계정 만들기
                </Button>
            </div>
        </LoginFormWrap>
    );
};

export default LoginForm;
