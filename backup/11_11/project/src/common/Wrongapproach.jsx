import { useEffect } from 'react';
import { WrongapproachWrap } from '../style/styled';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Wrongapproach = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, []);
    return (
        <WrongapproachWrap>
            <p className='not'>잘못된 접근 입니다.</p>
            <Spinner />
        </WrongapproachWrap>
    );
};

export default Wrongapproach;
