import { useEffect, useState } from 'react';
import { CommentWrap } from './styled';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = ({ moviesComment, movie_id, movie_channel }) => {
    const [showReport, setShowReport] = useState(false);

    const [sortedComments, setSortedComments] = useState(moviesComment);

    //댓글 정렬
    const handleSortComments = (sortType) => {
        const sorted = [...moviesComment].sort((a, b) => {
            if (sortType === 'oldest') {
                // 오래된 순으로 정렬 (오름차순)
                return new Date(a.date) - new Date(b.date);
            } else if (sortType === 'newest') {
                // 최신순으로 정렬 (내림차순)
                return new Date(b.date) - new Date(a.date);
            }
            return 0;
        });

        setSortedComments(sorted);
        setShowReport(false); // 메뉴 숨기기
    };

    const handleReportClick = () => {
        setShowReport((prev) => !prev);
    };
    return (
        <CommentWrap>
            <div className='section'>
                <div className='comment_top'>
                    <h2 className='total_comment'>댓글 {moviesComment.length} 개</h2>
                    <button className='label' onClick={handleReportClick}>
                        <img
                            src='https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/menu.svg.svg'
                            alt=''
                        />
                        <span className='label_title'>정렬 기준</span>
                    </button>
                    {showReport && (
                        <div className='text'>
                            <div
                                className='label_comment'
                                onClick={() => handleSortComments('popular')}
                            >
                                <p>인기 댓글순</p>
                            </div>
                            <div
                                className='label_comment'
                                onClick={() => handleSortComments('newest')}
                            >
                                <p>최신순</p>
                            </div>
                        </div>
                    )}
                </div>
                <CommentForm movie_id={movie_id} movie_channel={movie_channel} />
                <CommentList moviesComment={moviesComment} />
            </div>
        </CommentWrap>
    );
};

export default Comment;
