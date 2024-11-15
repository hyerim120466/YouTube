import CommentItem from "./CommentItem";

const CommentList = ({ moviesComment, movie_id, movie_channel }) => {
  return (
    <ul className="user_comment">
      {moviesComment.map((item) => (
        <CommentItem
          key={item.comment_id}
          item={item}
          movie_id={movie_id}
          movie_channel={movie_channel}
          moviesComment={moviesComment}
        />
      ))}
    </ul>
  );
};

export default CommentList;
