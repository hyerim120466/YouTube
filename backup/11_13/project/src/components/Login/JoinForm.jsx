import { useState } from 'react';
import { JoinFormWrap } from './styled';
import { Button } from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewUser } from '../../store/modules/authSlice';

const JoinForm = ({ setPageType }) => {
    const [user, setUser] = useState({
        user_name: '',
        user_age: '',
        user_tel: '',
        user_email: '',
        user_password: '',
    });
    const [nextForm, setNextForm] = useState(false);
    const dispatch = useDispatch();
    const { LoginUser } = useSelector((state) => state.auth);

    const handleUserChk = (e) => {
        e.preventDefault();
        if (user.user_name && user.user_age && user.user_tel) setNextForm(true);
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (LoginUser.find((login) => login.user_email === user.user_email)) {
            alert('중복되는 아이디가 있습니다.');
        } else {
            dispatch(AddNewUser(user));
        }
    };
    return (
        <JoinFormWrap onSubmit={onSubmit}>
            <p className='join-wrap'>
                <input
                    type='email'
                    name='user_email'
                    id='user_email'
                    placeholder='이메일'
                    className={nextForm && 'active'}
                    onChange={handleChangeInput}
                />
                <input
                    type='password'
                    name='user_password'
                    id='user_password'
                    placeholder='비밀번호'
                    className={nextForm && 'active'}
                    onChange={handleChangeInput}
                />
                <input
                    type='text'
                    name='user_name'
                    id='user_name'
                    placeholder='이름'
                    className='active'
                    onChange={handleChangeInput}
                />
                <input
                    type='age'
                    name='user_age'
                    id='user_age'
                    placeholder='나이'
                    className='active'
                    onChange={handleChangeInput}
                />
                <input
                    type='tel'
                    name='user_tel'
                    id='user_tel'
                    placeholder='전화번호'
                    className='active'
                    onChange={handleChangeInput}
                />
            </p>
            <div className='btn-wrap'>
                {nextForm ? (
                    <Button type='submit'>회원가입</Button>
                ) : (
                    <>
                        <Button onClick={handleUserChk} className='next-btn'>
                            다음
                        </Button>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                setPageType('login');
                            }}
                            className='cancle-btn'
                        >
                            취소
                        </Button>
                    </>
                )}
            </div>
        </JoinFormWrap>
    );
};

export default JoinForm;
