import { useDispatch } from 'react-redux';
import { SideMenuChange } from '../../store/modules/HeaderSlice';

const AllMenu = () => {
    const dipatch = useDispatch();
    // 사이드 메뉴 활성화 비활성화 변경
    const handleChangeSideMenu = () => {
        dipatch(SideMenuChange());
    };
    return (
        <div className='all-menu' onClick={handleChangeSideMenu}>
            <div className='icon'>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/All_menu.svg'
                    alt='menu'
                />
            </div>
        </div>
    );
};

export default AllMenu;
