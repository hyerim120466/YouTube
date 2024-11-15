import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuItem = ({ id, name, type, nav, icon }) => {
    const navigate = useNavigate();
    const { isLoginUser } = useSelector((state) => state.auth);
    // 사이트 이동 함수
    const handleClickNav = () => {
        if (
            type === 'MyVideo' ||
            type === 'Dashboard' ||
            type === 'Content' ||
            type === 'Comment'
        ) {
            navigate(`/studio/${isLoginUser.user_id}${nav}`);
        } else {
            navigate(nav);
        }
    };
    return (
        <li onClick={handleClickNav}>
            <img src={icon} alt={type} />
            <span className='name'>{name}</span>
        </li>
    );
};

export default MenuItem;
