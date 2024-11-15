import { HeaderWrap } from '../style/styled';
import AllMenu from '../components/Header/AllMenu';
import Logo from '../components/Header/Logo';
import SearchBox from '../components/Header/SearchBox';
import UserMenu from '../components/Header/UserMenu';
import { useSelector } from 'react-redux';
import LoginButton from '../ui/Header/LoginButton';
import SearchHistory from '../components/Header/SearchHistory';

const Header = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return (
        <HeaderWrap id='header'>
            <div className='top'>
                <div className='first-box'>
                    <AllMenu />
                    <Logo />
                </div>
                <SearchBox />
                <SearchHistory />
                {isAuth ? <UserMenu /> : <LoginButton />}
            </div>
        </HeaderWrap>
    );
};

export default Header;
