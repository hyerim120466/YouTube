import { useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { DelMoviesComment, getAllMovies } from '../../store/modules/channelSlice';
import { useMouseOutside } from '../../hook/useMouseOutside';

const CommentItem = ({ item, movie_id, movie_channel }) => {
    const { comment_user_name, comment_body, comment_user_id, comment_id } = item;
    const [show, setShow] = useState(false);
    const { isLoginUser } = useSelector((state) => state.auth); // 로그인된 사용자 정보
    const dispatch = useDispatch();
    const wrapRef = useMouseOutside(() => setShow(false));

    // 클릭 시 메뉴 표시
    const handleClick = () => {
        setShow((prev) => !prev);
    };

    // 댓글 삭제
    const handleDelete = () => {
        const payload = {
            movie_id,
            movie_channel,
            comment_id,
            comment_user_id,
        };

        dispatch(DelMoviesComment(payload));
        dispatch(getAllMovies());
    };

    return (
        <li className='CommentList'>
            <div>
                <span className='user-profile'>{comment_user_name.charAt(0)}</span>
            </div>
            <div className='comment_userId'>
                <p className='userId'>@{comment_user_name}</p>
                <p>{comment_body}</p>
            </div>
            <button className='BelowBtn Comment' onClick={handleClick}>
                <IoMdMore />
            </button>

            {show && (
                <div className='Comment_items' ref={wrapRef}>
                    {isLoginUser?.user_id === comment_user_id ? (
                        <>
                            <p onClick={handleDelete}>
                                <img
                                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/trash.svg'
                                    alt='삭제'
                                />
                                <span className='Comment_item'>삭제</span>
                            </p>
                        </>
                    ) : (
                        <p>
                            <img
                                src='https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/complaint.svg'
                                alt='신고'
                            />
                            <span className='Comment_item'>신고</span>
                        </p>
                    )}
                </div>
            )}
        </li>
    );
};

export default CommentItem;
