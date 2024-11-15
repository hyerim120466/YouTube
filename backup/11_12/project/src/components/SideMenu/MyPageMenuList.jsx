import { useSelector } from 'react-redux';
import { SideMenuAPI } from '../../assets/api/SideMenu';
import MenuItem from './MenuItem';
const MyPageMenuList = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return (
        <ul>
            <p className='menu-title'>
                내 페이지{' '}
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Right.svg'
                    alt='right'
                />
            </p>
            {isAuth
                ? SideMenuAPI.MyPage.map((mypage) => <MenuItem key={mypage.id} {...mypage} />)
                : SideMenuAPI.MyPage.filter(
                      (page) =>
                          page.type !== 'Download_List' &&
                          page.type !== 'like_Movie_List' &&
                          page.type !== 'Playlist' &&
                          page.type !== 'Later_Watch'
                  ).map((mypage) => <MenuItem key={mypage.id} {...mypage} />)}
        </ul>
    );
};

export default MyPageMenuList;
