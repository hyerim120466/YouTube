import { useNavigate } from 'react-router-dom';

const MenuItem = ({ id, name, type, nav, icon }) => {
    const navigate = useNavigate();
    return (
        <li onClick={() => navigate(nav)}>
            <img src={icon} alt={type} />
            <span className='name'>{name}</span>
        </li>
    );
};

export default MenuItem;
