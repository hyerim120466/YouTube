import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import { LayoutWrap } from '../style/styled';
import { useSelector } from 'react-redux';

const Layout = () => {
    const { isSideMenu } = useSelector((state) => state.header);
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
