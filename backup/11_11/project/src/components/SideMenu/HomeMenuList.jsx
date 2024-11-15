import { SideMenuAPI } from '../../assets/api/SideMenu';
import MenuItem from './MenuItem';
const HomeMenuList = () => {
    return (
        <ul>
            {SideMenuAPI.Home.map((home) => (
                <MenuItem key={home.id} {...home} />
            ))}
        </ul>
    );
};

export default HomeMenuList;
