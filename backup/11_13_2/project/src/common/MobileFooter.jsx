import MobileMenuList from '../components/SideMenu/MobileMenuList';
import { MobileFooterWrap } from '../style/styled';

const MobileFooter = () => {
    return (
        <MobileFooterWrap className='mobile'>
            <MobileMenuList />
        </MobileFooterWrap>
    );
};

export default MobileFooter;
