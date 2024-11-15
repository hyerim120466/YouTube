import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { CommentWrap } from "./styled";
import CommentList from "./CommentList";
import { useNavigate } from "react-router-dom";
import { AddNewMoviesComment } from "../../store/modules/channelSlice";

const Comment = ({ moviesComment, movie_id }) => {
  const [showReport, setShowReport] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const [commentInput, setCommentInput] = useState("");
  const { isLoginUser } = useSelector((state) => state.auth); //로그인정보
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [commentCount, setCommentCount] = useState(0); // 댓글 수 상태
  const [sortedComments, setSortedComments] = useState(moviesComment);

  useEffect(() => {
    setCommentCount(moviesComment.length); // 댓글 수 업데이트
    setSortedComments(moviesComment);
  }, [moviesComment]);

  const handleReportClick = () => {
    setShowReport((prev) => !prev);
  };

  const handleSortComments = (sortType) => {
    let sorted = [...moviesComment];
    if (sortType === "popular") {
      // 인기 댓글 순으로 정렬
      sorted.sort((a, b) => b.likes - a.likes);
    } else if (sortType === "newest") {
      // 최신순으로 정렬
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setSortedComments(sorted);
    setShowReport(false); // 메뉴 숨기기
  };

  // 댓글 입력칸 클릭 시
  const handleInputClick = () => {
    if (!isLoginUser) {
      navigate("/login"); // 로그인 화면으로 이동
    } else {
      setShowFooter(true); // 입력란 보이기
    }
  };

  // 댓글 입력 변경
  const handleInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  // 댓글 취소 클릭 시 입력란 초기화
  const handleCancelClick = () => {
    setShowFooter(false);
    setCommentInput("");
  };

  // 댓글 추가
  const handleAddComment = () => {
    if (!isLoginUser) {
      navigate("/login"); // 로그인 되어 있지 않으면 로그인 페이지로 이동
      return;
    }

    if (commentInput.trim()) {
      dispatch(
        AddNewMoviesComment({
          movie_id,
          comment_user_name: isLoginUser.user_name,
          comment_body: commentInput.trim(),
        })
      );
      setCommentInput(""); // 댓글 입력창 초기화
    }
  };

  return (
    <CommentWrap>
      <div className="section">
        <div className="comment_top">
          <h2 className="total_comment">댓글 {commentCount} 개</h2>
          <button className="label" onClick={handleReportClick}>
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/menu.svg.svg"
              alt=""
            />
            <span className="label_title">정렬 기준</span>
          </button>
          {showReport && (
            <div className="text">
              <div
                className="label_comment"
                onClick={() => handleSortComments("popular")}
              >
                <p>인기 댓글순</p>
              </div>
              <div
                className="label_comment"
                onClick={() => handleSortComments("newest")}
              >
                <p>최신순</p>
              </div>
            </div>
          )}
        </div>
        <div className="comment">
          <div className="comment_inner">
            <div>
              <div>
                <span className="user-profile">
                  {isLoginUser.user_name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="comment_edit">
              <input
                type="text"
                className="comment_edit_input"
                placeholder="댓글 추가..."
                value={commentInput}
                onChange={handleInputChange}
                onFocus={handleInputClick}
              />
            </div>
          </div>

          {showFooter && (
            <div className="comment_footer">
              <div className="emoji">
                <img
                  src="https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/emoji.svg.svg"
                  alt=""
                />
              </div>
              <div className="btns">
                <button className="btn cancel" onClick={handleCancelClick}>
                  취소
                </button>
                <button
                  className="btn btn_comment"
                  style={{
                    backgroundColor: commentInput ? "#007BFF" : "",
                    color: commentInput ? "#fff" : "",
                    cursor: commentInput ? "pointer" : "",
                  }}
                  disabled={!commentInput.trim()}
                  onClick={handleAddComment}
                >
                  댓글
                </button>
              </div>
            </div>
          )}
        </div>
        <CommentList moviesComment={moviesComment} movie_id={movie_id} />
      </div>
    </CommentWrap>
  );
};

export default Comment;
