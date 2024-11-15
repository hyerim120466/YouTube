import { Outlet, useNavigate } from 'react-router-dom';
import { StudioLayoutWrap } from '../style/styled';
import Header from './Header';
import { useSelector } from 'react-redux';
import StudioSideMenu from './StudioSideMenu';
import { useEffect } from 'react';

const StudioLayout = () => {
    const { isSideMenu } = useSelector((state) => state.header);
    const { isAuth } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) navigate('/login');
    }, []);
    if (isAuth)
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
