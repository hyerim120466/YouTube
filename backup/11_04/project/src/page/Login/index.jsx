import { useNavigate } from 'react-router-dom';
import { LoginWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../../store/modules/authSlice';
import { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({ user_email: '', user_password: '' });
    const [loginCheck, setLoginCheck] = useState(false);
    const { LoginUser, isAuth } = useSelector((state) => state.auth);

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
        } else {
            // alert('이메일 또는 비밀번호가 잘못 입력되었습니다.');
            setLoginCheck(true);
            return;
        }
    };

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    return (
        <LoginWrap>
            <div className="login-container">
                <form className="login-box" onSubmit={onSubmit}>
                    <img
                        className="logo"
                        onClick={() => navigate('/')}
                        src="https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_logo.svg"
                        alt="Youtube"
                    />
                    {!loginCheck ? (
                        <p className="login-input">
                            <input
                                type="email"
                                name="user_email"
                                placeholder="이메일"
                                onChange={changeInput}
                            />
                            <input
                                type="password"
                                name="user_password"
                                placeholder="비밀번호"
                                onChange={changeInput}
                            />
                        </p>
                    ) : (
                        <p className="failed-input">
                            <label htmlFor="">이메일 또는 비밀번호가 잘못 입력되었습니다.</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="이메일"
                                onChange={changeInput}
                            />
                            <input
                                type="password"
                                name="user_password"
                                placeholder="비밀번호"
                                onChange={changeInput}
                            />
                        </p>
                    )}
                    <Button className="login-btn" type="submit">
                        로그인
                    </Button>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;
