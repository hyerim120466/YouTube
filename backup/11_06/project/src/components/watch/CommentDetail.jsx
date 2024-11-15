const CommentDetail = ({ item }) => {
  const { comment_user_name, comment_body } = item;
  return (
    <li className="comment_userId">
      <p className="userId">@{comment_user_name}</p>
      <p>{comment_body}</p>
    </li>
  );
};

export default CommentDetail;
