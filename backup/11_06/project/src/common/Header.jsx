import { HeaderWrap } from '../style/styled';
import AllMenu from '../components/Header/AllMenu';
import Logo from '../components/Header/Logo';
import SearchBox from '../components/Header/SearchBox';
import UserMenu from '../components/Header/UserMenu';
import { useSelector } from 'react-redux';
import LoginButton from '../ui/Header/LoginButton';
import SearchHistory from '../components/Header/SearchHistory';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const { isAuth } = useSelector((state) => state.auth);
    // 해더에 검색 기록 온오프 추가
    const [isShown, setIsShown] = useState(false);
    const { Search } = useParams();

    return (
        <HeaderWrap id='header'>
            <div className='top'>
                <div className='first-box'>
                    <AllMenu />
                    <Logo />
                </div>
                <SearchBox isShown={isShown} setIsShown={setIsShown} />
                {Search && <SearchHistory Search={Search} isShown={isShown} />}
                {isAuth ? <UserMenu /> : <LoginButton />}
            </div>
        </HeaderWrap>
    );
};

export default Header;
