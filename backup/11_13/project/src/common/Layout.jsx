import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import { LayoutWrap } from '../style/styled';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Layout = () => {
    const { isSideMenu } = useSelector((state) => state.header);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', // 스무스 스크롤 추가
        });
    }, [pathname]);

    return (
        <LayoutWrap>
            <Header />
            <div className='content-wrap'>
                {isSideMenu && <SideMenu />}
                <Outlet />
            </div>
        </LayoutWrap>
    );
};

export default Layout;
