import { useState } from "react";
import { CommentWrap } from "./styled";

const Comment = () => {
  const [showReport, setShowReport] = useState(false);

  const handleReportClick = () => {
    setShowReport((prev) => !prev);
  };
  return (
    <CommentWrap>
      <div className="section">
        <div className="comment_top">
          <h2 className="total_comment">댓글 xx 개</h2>
          <button className="label" onClick={handleReportClick}>
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/menu.svg.svg"
              alt=""
            />
            <span className="label_title">정렬 기준</span>
          </button>
          {showReport && (
            <div className="text">
              <div className="label_comment">
                <p>인기 댓글순</p>
              </div>
              <div className="label_comment">
                <p>최신순</p>
              </div>
            </div>
          )}
        </div>
        <div className="comment">
          <div className="comment_inner">
            <div>
              <img
                className="user_profile"
                src="https://yt3.googleusercontent.com/wNoNXmOpkCgBiPmx8pusWVLDeXIADKo1MhiYz22JBdpVxzCFII7kbZ9g8ihRh1oRszvrvwetgw=s160-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="comment_edit">
              <input
                type="text"
                className="comment_edit_input "
                placeholder="댓글 추가..."
              />
            </div>
          </div>

          <div className="comment_footer">
            <div className="emoji">
              <img
                src="https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/emoji.svg.svg"
                alt=""
              />
            </div>
            <div className="btns">
              <button className="btn cancel">취소</button>
              <button className="btn btn_comment">댓글</button>
            </div>
          </div>
        </div>
        <div className="user_comment">
          <div>
            <img
              className="user_profile"
              src="https://yt3.googleusercontent.com/wNoNXmOpkCgBiPmx8pusWVLDeXIADKo1MhiYz22JBdpVxzCFII7kbZ9g8ihRh1oRszvrvwetgw=s160-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
        </div>
      </div>
    </CommentWrap>
  );
};

export default Comment;
