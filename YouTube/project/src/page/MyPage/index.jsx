import { useEffect } from 'react';
import { MyPageWrap } from './styled';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Feed from '../Feed';
import MyPageMenu from '../../components/MyPage/MyPageMenu';

const MyPage = () => {
    const { isAuth } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) navigate('/login');
    }, [isAuth]);

    if (isAuth)
        return (
            <MyPageWrap>
                <Feed category={'Viewing_Record'} />
                <Feed category={'Later_Watch'} />
                <MyPageMenu />
            </MyPageWrap>
        );
};

export default MyPage;
