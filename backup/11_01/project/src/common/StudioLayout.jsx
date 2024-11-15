import { Outlet } from 'react-router-dom';
import { StudioLayoutWrap } from '../style/styled';
import Header from './Header';
import { useSelector } from 'react-redux';
import StudioSideMenu from './StudioSideMenu';

const StudioLayout = () => {
    const { isSideMenu } = useSelector((state) => state.header);
    return (
        <StudioLayoutWrap>
            <Header />
            <div className='content-wrap'>
                {isSideMenu && <StudioSideMenu />}
                <Outlet />
            </div>
        </StudioLayoutWrap>
    );
};

export default StudioLayout;
