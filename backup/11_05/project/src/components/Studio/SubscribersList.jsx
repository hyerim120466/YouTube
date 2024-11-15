import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { SubscribersListWrap } from './styled';

const SubscribersList = ({ subscribers, channel }) => {
    const navigate = useNavigate();
    return (
        <SubscribersListWrap>
            <h3 className='title-h3'>채널 분석</h3>
            <p className='subscribers'>현재 구독자수</p>
            <p className='subscribers-count'>
                {subscribers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
            <Button onClick={() => navigate(`/channel/${channel}`)}>채널 이동</Button>
        </SubscribersListWrap>
    );
};

export default SubscribersList;
