import { useDispatch } from 'react-redux';
import { SideMenuChange } from '../../store/modules/HeaderSlice';

const AllMenu = () => {
    const dipatch = useDispatch();
    return (
        <div className='all-menu' onClick={() => dipatch(SideMenuChange())}>
            <div className='icon'>
                <a href='#' onClick={(e) => e.preventDefault()}>
                    <img
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/All_menu.svg'
                        alt='menu'
                    />
                </a>
            </div>
        </div>
    );
};

export default AllMenu;
