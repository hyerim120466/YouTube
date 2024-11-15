const CommentDetail = ({ commentBody, comment_user_name }) => {
  return (
    <li className="comment_userId">
      <p className="userId">@댓글유저아이디</p>
      <p>댓글내용 @@@</p>
    </li>
  );
};

export default CommentDetail;
