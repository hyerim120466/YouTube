import { useParams } from 'react-router-dom';
import { FeedWrap } from './styled';
import Viewing_Record from './Viewing_Record';

const Feed = () => {
    const { Category } = useParams();
    const getCategory = () => {
        switch (Category) {
            case 'Viewing_Record':
                return <Viewing_Record />;
            // case 'Playlist':
            // return <Playlist/>;
            // case 'Later_Watch':
            //     return '나중에 볼 동영상';
            // case 'like_Movie_List':
            //     return '좋아요 표시한 동영상';
            // case 'Download_List':
            //     return '오프라인 저장 동영상';
            default:
                return '피드';
        }
    };
    return <FeedWrap>{getCategory()}</FeedWrap>;
};

export default Feed;
