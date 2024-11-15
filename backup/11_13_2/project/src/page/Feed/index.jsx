import { useParams } from 'react-router-dom';
import { FeedWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import Video from '../../ui/Youtube/Video';
import { useState } from 'react';
import { AllDelList } from '../../store/modules/authSlice';

const Feed = () => {
    const { Category } = useParams();
    const { isLoginUser } = useSelector((state) => state.auth);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const getCategory = () => {
        switch (Category) {
            case 'Viewing_Record':
                return '시청 기록';
            case 'Playlist':
                return '재생 목록';
            case 'Later_Watch':
                return '나중에 볼 동영상';
            case 'like_Movie_List':
                return '좋아요 표시한 동영상';
            case 'Download_List':
                return '오프라인 저장 동영상';
            default:
                return '피드';
        }
    };

    return (
        <FeedWrap>
            <div className='hearder'>
                <div className='inner'>
                    <h2>{getCategory()}</h2>
                </div>
            </div>
            <div className='viewing_content'>
                <div className='inner'>
                    {/* 시청한 동영상 출력 */}
                    <ul className='video-list'>
                        {isLoginUser[Category]?.filter(
                            (video) =>
                                video.movie_title.toLowerCase().includes(search?.toLowerCase()) ||
                                video.movie_category.toLowerCase().includes(search.toLowerCase())
                        ).map((movie) => (
                            <Video key={movie.movie_id} movie={movie} type={Category} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className='page_menu'>
                <div className='search_wrap'>
                    <div className='search'>
                        <img
                            src='https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Search.svg'
                            alt={`${getCategory()} 검색`}
                        />
                        <input
                            type='text'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={`${getCategory()} 검색`}
                        />
                    </div>

                    <div
                        className='content'
                        onClick={() =>
                            dispatch(AllDelList({ user_id: isLoginUser.user_id, type: Category }))
                        }
                    >
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC' />
                        <p>{getCategory()} 지우기 </p>
                    </div>
                </div>
            </div>
        </FeedWrap>
    );
};

export default Feed;
