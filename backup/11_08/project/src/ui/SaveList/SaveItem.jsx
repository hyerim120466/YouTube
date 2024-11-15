import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsAddList, IsDelList } from "../../store/modules/authSlice";
const SaveItem = ({ save, movie }) => {
  const { type, img, name, falseName, trueName, falseImg, trueImg } = save;
  const { isLoginUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [ofType, setOfType] = useState(false);

  const handleChangeSave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (ofType) {
      // 삭제
      dispatch(IsDelList({ user_id: isLoginUser.user_id, type, movie }));
    } else {
      // 저장
      dispatch(IsAddList({ user_id: isLoginUser.user_id, type, movie }));
    }
  };

  useEffect(() => {
    if (isLoginUser[type].find((user) => user.movie_id === movie.movie_id)) {
      setOfType(true);
    } else {
      setOfType(false);
    }
  }, [type, dispatch, handleChangeSave]);

  if (type !== "Download_List") {
    return (
      <li className="save-item">
        <img src={img} alt={name} />
        {name}
      </li>
    );
  }

  return (
    <li className="save-item" onClick={handleChangeSave}>
      <img
        src={ofType ? trueImg : falseImg}
        alt={ofType ? trueName : falseName}
      />
      {ofType ? trueName : falseName}
    </li>
  );
};
export default SaveItem;
