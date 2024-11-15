import { useSelector } from 'react-redux';
import { SavePopupWrap } from './styled';

const SavePopup = ({ left }) => {
    const { popMsg } = useSelector((state) => state.savepop);
    return (
        <SavePopupWrap left={left}>
            <p>{popMsg} 이(가) 되었습니다.</p>
        </SavePopupWrap>
    );
};

export default SavePopup;
