import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isSavePopFalse } from '../store/modules/savePopupSlice';
import SavePopup from '../ui/SaveList/SavePopup';
import Popup from '../ui/popup/Popup';

const PopWrap = () => {
    const { isSideMenu } = useSelector((state) => state.header);
    const { isSubscribers } = useSelector((state) => state.subscribers);
    const { isSavePop } = useSelector((state) => state.savepop);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isSubscribers) {
            const modal = document.querySelector('#subscript-popup');
            modal.showModal();
        }
    }, [isSubscribers]);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(isSavePopFalse());
        }, 1000);
        if (isSavePop) timer;
        return () => clearInterval(timer);
    }, [isSavePop]);
    return (
        <>
            <Popup />
            {isSavePop && <SavePopup left={isSideMenu ? '28rem' : '4rem'} />}
        </>
    );
};

export default PopWrap;
