import HomeMenuList from '../components/SideMenu/HomeMenuList';
import MyPageMenuList from '../components/SideMenu/MyPageMenuList';
import SearchCategoryMenu from '../components/SideMenu/SearchCategoryMenu';
import SubscriptionMenuList from '../components/SideMenu/SubscriptionMenuList';
import { SideMenuWrap } from '../style/styled';

const SideMenu = () => {
    return (
        <SideMenuWrap className='pc'>
            <HomeMenuList />
            <MyPageMenuList />
            <SubscriptionMenuList />
            <SearchCategoryMenu />
            <ul>
                <p className='footer'>
                    © 2024 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA
                    94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅:
                    Google LLC, 사업자정보, 불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그
                    또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을
                    판매하지 않으며, 그에 대한 책임을 지지 않습니다.
                </p>
            </ul>
        </SideMenuWrap>
    );
};

export default SideMenu;
