const CommentItem = ({ item }) => {
    const { comment_user_name, comment_body } = item;
    return (
        <li>
            <div>
                <span className='user-profile'>{item.comment_user_name.charAt(0)}</span>
            </div>
            <div className='comment_userId'>
                <p className='userId'>@{comment_user_name}</p>
                <p>{comment_body}</p>
            </div>
        </li>
    );
};

export default CommentItem;
