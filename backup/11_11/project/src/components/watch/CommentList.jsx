import CommentItem from './CommentItem';

const CommentList = ({ moviesComment }) => {
    return (
        <ul className='user_comment'>
            {moviesComment.map((item) => (
                <CommentItem key={item.comment_id} item={item} />
            ))}
        </ul>
    );
};

export default CommentList;
