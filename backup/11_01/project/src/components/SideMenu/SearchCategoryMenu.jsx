import { SideMenuAPI } from '../../assets/api/SideMenu';
import MenuItem from './MenuItem';
const SearchCategoryMenu = () => {
    return (
        <ul>
            <p className='menu-title'>탐색</p>
            {SideMenuAPI.SearchCategory.map((category) => (
                <MenuItem key={category.id} {...category} />
            ))}
        </ul>
    );
};

export default SearchCategoryMenu;
