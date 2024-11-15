import { useNavigate } from 'react-router-dom';
import { CommentItemWrap } from './styled';

const CommentItem = ({ comment, thisChannel }) => {
    const thisMovie = thisChannel.Movies.find((movie) =>
        movie.movie_comments.find((movieComment) => movieComment.comment_id === comment.comment_id)
    );
    const navigate = useNavigate();
    const colors = ['var(--youtube-red)', 'skyblue', 'green', 'orange', 'pink'];
    const colorRandom = colors[Math.floor(Math.random() * colors.length)];

    return (
        <CommentItemWrap
            className='comment-item'
            onClick={() => navigate(`/watch/${thisMovie.movie_id}`)}
            userColor={colorRandom}
        >
            <div className='comment-text-wrap'>
                <div className='user'>
                    <span className='user-profile'>{comment.comment_user_name.charAt(0)}</span>
                    <span className='comment_user_name'>@{comment.comment_user_name}</span>
                </div>
                <p className='comment_body'>{comment.comment_body}</p>
            </div>
            <div className='comment-img-wrap'>
                <img src={thisMovie.movie_image} alt='Movie-image' />
            </div>
            <div className='comment_title-wrap'>{thisMovie.movie_title}</div>
        </CommentItemWrap>
    );
};

export default CommentItem;
