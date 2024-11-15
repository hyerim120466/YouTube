import { useSelector } from 'react-redux';
import StudioMenuList from '../components/SideMenu/StudioMenuList';
import { SideMenuWrap } from '../style/styled';

const StudioSideMenu = () => {
    const { Channel } = useSelector((state) => state.channel);
    const { isLoginUser } = useSelector((state) => state.auth);
    const thisChannel = Object.values(Channel).find(
        (channel) => channel.channel_id === Number(isLoginUser.user_id)
    );
    return (
        <SideMenuWrap>
            {thisChannel && (
                <div className='channel'>
                    <div className='channel-img-wrap'>
                        <img src={thisChannel.channel_image} alt={thisChannel.channel_name} />
                    </div>
                    <div className='channel-name'>
                        <p className='my-channel'>내 채널</p>
                        <p className='my-channel-name'>{thisChannel.channel_name}</p>
                    </div>
                </div>
            )}
            <StudioMenuList />
        </SideMenuWrap>
    );
};

export default StudioSideMenu;
