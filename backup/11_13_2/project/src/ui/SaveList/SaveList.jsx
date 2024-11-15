import VideoSave from '../../assets/api/VideoSave';
import SaveItem from './SaveItem';
import { SaveListWrap } from './styled';

const SaveList = ({ movie }) => {
    return (
        <SaveListWrap className='save-list' onClick={(e) => e.stopPropagation()}>
            {VideoSave.map((save) => (
                <SaveItem key={save.id} save={save} movie={movie} />
            ))}
        </SaveListWrap>
    );
};

export default SaveList;
