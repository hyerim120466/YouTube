import { HeaderWrap } from '../style/styled';
import AllMenu from '../components/Header/AllMenu';
import Logo from '../components/Header/Logo';
import SearchBox from '../components/Header/SearchBox';
import UserMenu from '../components/Header/UserMenu';

const Header = () => {
    return (
        <HeaderWrap id='header'>
            <div className='top'>
                <div className='first-box'>
                    <AllMenu />
                    <Logo />
                </div>
                <SearchBox />
                <UserMenu />
            </div>
        </HeaderWrap>
    );
};

export default Header;
