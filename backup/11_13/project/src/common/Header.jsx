import { HeaderWrap } from '../style/styled';
import AllMenu from '../components/Header/AllMenu';
import Logo from '../components/Header/Logo';
import SearchBox from '../components/Header/SearchBox';
import UserMenu from '../components/Header/UserMenu';
import { useSelector } from 'react-redux';
import LoginButton from '../ui/Header/LoginButton';
import SearchHistory from '../components/Header/SearchHistory';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
    const { isAuth } = useSelector((state) => state.auth);
    const [isShown, setIsShown] = useState(true); // 검색 기록 보이기
    const [search, setSearch] = useState(''); // searchBox -> Header 이동
    const { Search } = useParams();

    const wrapRef = useRef(null);
    const outClick = (event) => {
        if (wrapRef.current && !wrapRef.current.contains(event.target)) {
            setIsShown(true);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', outClick);
        return () => {
            document.removeEventListener('mousedown', outClick);
        };
    }, []);

    return (
        <HeaderWrap id='header' ref={wrapRef}>
            <div className='top'>
                <div className='first-box'>
                    <AllMenu />
                    <Logo />
                </div>
                <SearchBox
                    isShown={isShown}
                    setIsShown={setIsShown}
                    search={search}
                    setSearch={setSearch}
                />
                <SearchHistory
                    Search={Search}
                    isShown={isShown}
                    setSearch={setSearch}
                    setIsShown={setIsShown}
                />
                {isAuth ? <UserMenu /> : <LoginButton />}
            </div>
        </HeaderWrap>
    );
};

export default Header;
