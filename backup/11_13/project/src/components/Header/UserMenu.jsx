import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import UserMenuList from '../../ui/Header/UserMenuList';

const UserMenu = () => {
    const { isLoginUser } = useSelector((state) => state.auth);
    const [menu, setMenu] = useState(false);
    const wrapRef = useRef(null);
    const outClick = (event) => {
        if (wrapRef.current && !wrapRef.current.contains(event.target)) {
            setMenu(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', outClick);
        return () => {
            document.removeEventListener('mousedown', outClick);
        };
    }, []);
    return (
        <div className='user-menu pc'>
            <a href='#'>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Making_video.svg'
                    alt='MakingVideo'
                />
            </a>
            <a href='#'>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Notification.svg'
                    alt='Notification'
                />
            </a>
            <a href='#' onClick={() => setMenu(!menu)} ref={wrapRef}>
                <span className='user-profile'>
                    {isLoginUser?.user_name?.charAt(0)}
                    {menu && <UserMenuList />}
                </span>
            </a>
        </div>
    );
};

export default UserMenu;
