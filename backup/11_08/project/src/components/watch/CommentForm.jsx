import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddNewMoviesComment, getAllMovies } from '../../store/modules/channelSlice';

const CommentForm = ({ movie_id, movie_channel }) => {
    const { isLoginUser } = useSelector((state) => state.auth); // 로그인 정보
    const [showFooter, setShowFooter] = useState(false);
    const [commentInput, setCommentInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 댓글 취소 시 초기화
    const handleCancelClick = () => {
        setShowFooter(false);
        setCommentInput('');
    };

    // 댓글 입력칸 클릭 시 로그인 상태 확인
    const handleInputClick = () => {
        if (!isLoginUser) {
            navigate('/login'); // 로그인 화면으로 이동
        } else {
            setShowFooter(true); // 입력란 보이기
        }
    };

    // 댓글 입력 변경
    const handleInputChange = (e) => {
        setCommentInput(e.target.value);
    };

    // 댓글 작성
    const handleSubmit = (e) => {
        e.preventDefault();
        // 댓글 추가
        dispatch(
            AddNewMoviesComment({
                movie_id,
                movie_channel,
                comment_body: commentInput,
                comment_user_id: isLoginUser.user_id,
                comment_user_name: isLoginUser.user_name,
            })
        );
        // 댓글 입력란 초기화
        setCommentInput('');
        dispatch(getAllMovies());
    };

    return (
        <div className='comment'>
            <div className='comment_inner'>
                <div>
                    <span className='user-profile'>{isLoginUser?.user_name?.charAt(0)}</span>
                </div>
                <form className='comment_edit' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='comment_edit_input'
                        placeholder='댓글 추가...'
                        onFocus={handleInputClick}
                        onChange={handleInputChange}
                        value={commentInput}
                    />
                    {showFooter && (
                        <div className='comment_footer'>
                            <div className='emoji'>
                                <img
                                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/emoji.svg.svg'
                                    alt='emoji'
                                />
                            </div>
                            <div className='btns'>
                                <button className='btn cancel' onClick={handleCancelClick}>
                                    취소
                                </button>
                                <button
                                    className='btn btn_comment'
                                    type='submit'
                                    style={{
                                        backgroundColor: commentInput ? '#007BFF' : '',
                                        color: commentInput ? '#fff' : '',
                                    }}
                                    disabled={!commentInput}
                                >
                                    댓글
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
