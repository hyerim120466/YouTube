import { useSelector } from 'react-redux';
import CommentDetail from './CommentDetail';

const CommentList = ({ moviesComment, movie_id }) => {
    const { allMovies } = useSelector((state) => state.channel);

    return (
        <ul className='user_comment'>
            {moviesComment.map((item) => (
                <li key={item.movie_id}>
                    <div>
                        <span className='user-profile'>{item.comment_user_name.charAt(0)}</span>
                    </div>

                    <CommentDetail item={item} />
                </li>
            ))}
        </ul>
    );
};

export default CommentList;
