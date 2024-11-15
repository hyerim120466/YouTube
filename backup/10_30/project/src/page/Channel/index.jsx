import { useParams } from 'react-router-dom';
import { ChannelWrap } from './styled';

const Channel = () => {
    const { Channel_ID } = useParams();
    return (
        <ChannelWrap>
            <h2>Channel {Channel_ID}</h2>
        </ChannelWrap>
    );
};

export default Channel;
