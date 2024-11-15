import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsAddList } from "../../store/modules/authSlice";
import VideoSave from "../../assets/api/VideoSave";

const SaveItem = ({ save, movie }) => {
  const { type } = save;
  const { isLoginUser } = useSelector((state) => state.auth);
  const itemRef = useRef(null);
  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(IsAddList({ user_id: isLoginUser.user_id, type, movie }));
  };

  useEffect(() => {
    const itemElement = itemRef.current;
    if (itemElement) {
      itemElement.addEventListener("click", handleSave);
    }
  }, [handleSave]);

  // Download_List에서 현재 movie_id가 존재하는지 확인하여 조건 설정
  const isDownloaded =
    type === "Download_List" &&
    isLoginUser.Download_List.filter((down) => down.movie_id === movie.movie_id)
      .length > 0;

  // 조건에 따라 li 요소를 다르게 렌더링
  if (type === "Download_List") {
    if (isDownloaded) {
      // saveType이 false인 항목만 렌더링
      const offlineDeleteItem = VideoSave.find(
        (item) => item.type === "Download_List" && item.saveType === false
      );
      if (offlineDeleteItem) {
        return (
          <li className="save-item" ref={itemRef} onClick={(e) => handleSave()}>
            <img src={offlineDeleteItem.img} alt={offlineDeleteItem.name} />
            {offlineDeleteItem.name}
          </li>
        );
      }
    } else {
      // saveType이 true인 항목 렌더링
      const offlineSaveItem = VideoSave.find(
        (item) => item.type === "Download_List" && item.saveType === true
      );
      if (offlineSaveItem) {
        return (
          <li className="save-item" ref={itemRef} onClick={(e) => handleSave()}>
            <img src={offlineSaveItem.img} alt={offlineSaveItem.name} />
            {offlineSaveItem.name}
          </li>
        );
      }
    }
    return null;
  }

  // 기본적으로 다른 타입의 항목은 모두 렌더링
  if (type !== "Download_List")
    return (
      <li className="save-item" ref={itemRef} onClick={(e) => handleSave()}>
        <img src={save.img} alt={save.name} />
        {save.name}
      </li>
    );
};

export default SaveItem;
