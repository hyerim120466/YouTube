import { useSelector } from "react-redux";
import CommentDetail from "./CommentDetail";

const CommentList = ({ movieId }) => {
  const { isLoginUser } = useSelector((state) => state.auth);

  return (
    <ul className="user_comment">
      <div>
        <span className="user-profile">{isLoginUser.user_name.charAt(0)}</span>
      </div>
      <CommentDetail />
    </ul>
  );
};

export default CommentList;
