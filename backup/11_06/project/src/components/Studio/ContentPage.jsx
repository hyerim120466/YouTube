import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentPageWrap } from './styled';
import Video from '../../ui/Youtube/Video';
import { DelMovies } from '../../store/modules/channelSlice';

const ContentPage = () => {
    const { Channel } = useSelector((state) => state.channel);
    const { isLoginUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const thisChannel = Object.values(Channel).find(
        (channel) => channel.channel_id === Number(isLoginUser.user_id)
    );
    const [selectedMovies, setSelectedMovies] = useState([]);
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allMovie = thisChannel.Movies.map((movie) => movie.movie_id);
            setSelectedMovies(allMovie);
        } else {
            setSelectedMovies([]);
        }
    };
    const handleSelectMovie = (movie_id) => {
        setSelectedMovies((movie) =>
            movie.includes(movie_id) ? movie.filter((id) => id !== movie_id) : [...movie, movie_id]
        );
    };

    const handleDelMovies = () => {
        dispatch(
            DelMovies({
                channel_name: thisChannel.Movies[0].movie_channel,
                movie_id: selectedMovies,
            })
        );
        setSelectedMovies([]);
    };

    return (
        <ContentPageWrap>
            <div className='inner'>
                <h2 className='studio-title'>채널 콘텐츠</h2>
                <div className={selectedMovies.length > 0 ? 'del-menu active' : 'del-menu'}>
                    <p className='selectedMovies-length'>{selectedMovies.length}개 선택됨</p>
                    <p className='del-btn' onClick={handleDelMovies}>
                        삭제
                    </p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type='checkbox'
                                    onChange={handleSelectAll}
                                    checked={selectedMovies.length === thisChannel.Movies.length}
                                />
                            </th>
                            <th>동영상</th>
                            <th>제목</th>
                            <th>공개 상태</th>
                            <th>제한사항</th>
                            <th>날짜</th>
                            <th>조회수</th>
                            <th>댓글</th>
                            <th>좋아요</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thisChannel.Movies.map((movie) => (
                            <tr key={movie.movie_id}>
                                <td>
                                    <input
                                        type='checkbox'
                                        checked={selectedMovies.includes(movie.movie_id)}
                                        onChange={() => handleSelectMovie(movie.movie_id)}
                                    />
                                </td>
                                <td className='movie_video'>
                                    <Video movie={movie} />
                                </td>
                                <td className='movie_info'>
                                    <p className='movie_title'>{movie.movie_title}</p>
                                    <p className='movie_body'>{movie.movie_body}</p>
                                </td>
                                <td>공개</td>
                                <td className='limited-text'>저작권</td>
                                <td className='movie_date'>
                                    {movie.movie_date.year}.{movie.movie_date.month}.
                                    {movie.movie_date.day}
                                </td>
                                <td>
                                    {movie.movie_like_count
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </td>
                                <td>{movie.movie_comments.length}</td>
                                <td>
                                    {movie.movie_like_count
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ContentPageWrap>
    );
};

export default ContentPage;
