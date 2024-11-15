import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';
import CommentItem from './CommentItem';
import { CommentListWrap } from './styled';
import { useSelector } from 'react-redux';

const CommentList = ({ comment, thisChannel }) => {
    const navigate = useNavigate();
    const { isLoginUser } = useSelector((state) => state.auth);
    return (
        <CommentListWrap>
            <h3 className='title-h3'>최신 댓글 ({comment.length})</h3>
            <ul>
                {comment.map((comment) => (
                    <CommentItem
                        key={comment.comment_id}
                        comment={comment}
                        thisChannel={thisChannel}
                    />
                ))}
            </ul>
            <Button onClick={() => navigate(`/studio/${isLoginUser.user_id}/comment`)}>
                더 보기
            </Button>
        </CommentListWrap>
    );
};

export default CommentList;
