import { useParams } from 'react-router-dom';
import { StudioWrap } from './styled';

const Studio = () => {
    const { User_ID } = useParams();
    return (
        <StudioWrap>
            <h2>Studio {User_ID}</h2>
        </StudioWrap>
    );
};

export default Studio;
