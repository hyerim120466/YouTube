import { SavePopupWrap } from "./styled";

const SavePopup = ({ title, left }) => {
  return (
    <SavePopupWrap $left={left}>
      <p>{title}되었습니다.</p>
    </SavePopupWrap>
  );
};

export default SavePopup;
