import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IsAddList, IsDelList } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';
import { isSavePopTrue } from '../../store/modules/savePopupSlice';

const SaveItem = ({ save, movie }) => {
    const { type, img, falseName, trueName, falseImg, trueImg } = save;
    const { isLoginUser, isAuth } = useSelector((state) => state.auth);
    const { isSavePop } = useSelector((state) => state.savepop);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ofType, setOfType] = useState(false);

    const handleChangeSave = (e) => {
        e.preventDefault();
        if (!isAuth) navigate('/login');
        if (ofType) {
            // 삭제
            dispatch(IsDelList({ user_id: isLoginUser.user_id, type, movie }));

            dispatch(isSavePopTrue(trueName));
        } else {
            // 저장
            dispatch(IsAddList({ user_id: isLoginUser.user_id, type, movie }));
            dispatch(isSavePopTrue(falseName));
        }
    };

    useEffect(() => {
        if (isLoginUser[type]?.find((user) => user.movie_id === movie.movie_id)) {
            setOfType(true);
        } else {
            setOfType(false);
        }
    }, [type, dispatch, handleChangeSave]);

    if (type !== 'Download_List') {
        return (
            <li
                className='save-item'
                onClick={handleChangeSave}
                style={{
                    pointerEvents: isSavePop && 'none',
                }}
            >
                <img src={img} alt={ofType ? trueName : falseName} />
                {ofType ? trueName : falseName}
            </li>
        );
    }

    return (
        <li
            className='save-item'
            onClick={handleChangeSave}
            style={{
                pointerEvents: isSavePop && 'none',
            }}
        >
            <img src={ofType ? trueImg : falseImg} alt={ofType ? trueName : falseName} />
            {ofType ? trueName : falseName}
        </li>
    );
};
export default SaveItem;
