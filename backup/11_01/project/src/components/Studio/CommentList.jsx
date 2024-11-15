import { Button } from '../../ui/Button';
import CommentItem from './CommentItem';
import { CommentListWrap } from './styled';

const CommentList = ({ comment, thisChannel }) => {
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
            <Button>더 보기</Button>
        </CommentListWrap>
    );
};

export default CommentList;
