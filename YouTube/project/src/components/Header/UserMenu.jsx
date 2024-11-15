import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import UserMenuList from '../../ui/Header/UserMenuList';
import { useMouseOutside } from '../../hook/useMouseOutside';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
    const { isLoginUser } = useSelector((state) => state.auth);
    const [menu, setMenu] = useState(false);
    const menuRef = useMouseOutside(() => setMenu(false));
    const navigate = useNavigate();
    return (
        <div className='user-menu pc'>
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    navigate(`/studio/${isLoginUser.user_id}/dashboard`);
                }}
            >
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Making_video.svg'
                    alt='MakingVideo'
                />
            </a>
            <a href='#' onClick={() => setMenu(!menu)} ref={menuRef}>
                <span className='user-profile'>
                    {isLoginUser?.user_name?.charAt(0)}
                    {menu && <UserMenuList />}
                </span>
            </a>
        </div>
    );
};

export default UserMenu;
