import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsAddList, IsDelList } from "../../store/modules/authSlice";
import { useNavigate } from "react-router-dom";
import SavePopup from "./SavePopup";
const SaveItem = ({ save, movie }) => {
  const { type, img, falseName, trueName, falseImg, trueImg } = save;
  const { isSideMenu } = useSelector((state) => state.header);
  const { isLoginUser, isAuth } = useSelector((state) => state.auth);
  const [savePop, setSavePop] = useState(false);

  const [title, setTitle] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ofType, setOfType] = useState(false);

  const handleChangeSave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isAuth) navigate("/login");
    if (ofType) {
      // 삭제
      dispatch(IsDelList({ user_id: isLoginUser.user_id, type, movie }));
      setTitle(trueName);
      setSavePop(true);
    } else {
      // 저장
      dispatch(IsAddList({ user_id: isLoginUser.user_id, type, movie }));
      setTitle(falseName);
      setSavePop(true);
    }
  };

  useEffect(() => {
    if (isLoginUser[type]?.find((user) => user.movie_id === movie.movie_id)) {
      setOfType(true);
    } else {
      setOfType(false);
    }
  }, [type, dispatch, handleChangeSave]);

  useEffect(() => {
    setTimeout(() => {
      setSavePop(false);
    }, 3000);
  }, [savePop]);

  if (type !== "Download_List") {
    return (
      <li className="save-item" onClick={handleChangeSave}>
        <img src={img} alt={ofType ? trueName : falseName} />
        {ofType ? trueName : falseName}
        {savePop ? (
          <SavePopup title={title} left={isSideMenu ? "28rem" : " 5rem"} />
        ) : null}
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
      {savePop ? (
        <SavePopup title={title} left={isSideMenu ? "28rem" : " 5rem"} />
      ) : null}
    </li>
  );
};
export default SaveItem;
