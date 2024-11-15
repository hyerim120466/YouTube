import { useNavigate, useParams } from 'react-router-dom';
import { CommentPageWrap } from './styled';
import { useSelector } from 'react-redux';
import CommentItem from './CommentItem';
import { useEffect } from 'react';

const CommentPage = () => {
    const { User_ID } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    const { isAuth } = useSelector((state) => state.auth);
    const thisChannel = Object.values(Channel).find(
        (channel) => channel.channel_id === Number(User_ID)
    );
    const thisComment = thisChannel.Movies.flatMap((comment) => comment.movie_comments);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) navigate(`/`);
    }, [isAuth]);

    return (
        <CommentPageWrap>
            <div className='inner'>
                <h2 className='studio-title'>채널 댓글</h2>
                <div className='comment-nav-bar'>
                    <p className='comment-tab'>댓글</p>
                </div>
                <ul className='comment-list'>
                    {thisComment.map((comment) => (
                        <CommentItem
                            key={comment.comment_id}
                            comment={comment}
                            thisChannel={thisChannel}
                        />
                    ))}
                </ul>
            </div>
        </CommentPageWrap>
    );
};

export default CommentPage;
