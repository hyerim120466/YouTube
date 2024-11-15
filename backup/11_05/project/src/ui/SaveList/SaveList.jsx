import VideoSave from "../../assets/api/VideoSave";
import SaveItem from "./SaveItem";
import { SaveListWrap } from "./styled";

const SaveList = () => {
  return (
    <SaveListWrap className="save-list">
      {VideoSave.map((save) => (
        <SaveItem key={save.id} save={save} />
      ))}
    </SaveListWrap>
  );
};

export default SaveList;
