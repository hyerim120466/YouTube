import VideoSave from "../../assets/api/VideoSave";
import { SaveListWrap } from "./styled";

const SaveList = ({ saveShow }) => {
  return (
    <SaveListWrap className={saveShow ? "save-list active" : "save-list"}>
      {VideoSave.map((save) => (
        <li className="save-item" key={save.id}>
          <img src={save.img} alt={save.name} />
          {save.name}
        </li>
      ))}
      {/* <li>
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg"
              alt="오프라인 저장 동영상에서 삭제"
            />
            오프라인 저장 동영상에서 삭제
          </li> */}
    </SaveListWrap>
  );
};

export default SaveList;
