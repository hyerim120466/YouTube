import { useParams } from 'react-router-dom';
import { FeedWrap } from './styled';

const Feed = () => {
    const { Category } = useParams();
    return (
        <FeedWrap>
            <h2>Feed {Category}</h2>
        </FeedWrap>
    );
};

export default Feed;
