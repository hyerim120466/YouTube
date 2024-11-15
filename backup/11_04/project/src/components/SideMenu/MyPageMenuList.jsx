import { SideMenuAPI } from '../../assets/api/SideMenu';
import MenuItem from './MenuItem';
const MyPageMenuList = () => {
    return (
        <ul>
            <p className='menu-title'>
                내 페이지{' '}
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Right.svg'
                    alt='right'
                />
            </p>
            {SideMenuAPI.MyPage.map((mypage) => (
                <MenuItem key={mypage.id} {...mypage} />
            ))}
        </ul>
    );
};

export default MyPageMenuList;
