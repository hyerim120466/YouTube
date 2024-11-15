import { StudioSideMenuAPI } from '../../assets/api/StudioSideMenu';
import MenuItem from './MenuItem';
const StudioMenuList = () => {
    return (
        <ul className='studiomenu-list'>
            {StudioSideMenuAPI.map((studio) => (
                <MenuItem key={studio.id} {...studio} />
            ))}
        </ul>
    );
};

export default StudioMenuList;
