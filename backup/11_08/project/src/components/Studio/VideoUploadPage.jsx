import { useState } from 'react';
import { VideoUploadPageWrap } from './styled';
import { Button } from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewMovies, getAllMovies } from '../../store/modules/channelSlice';
import { useNavigate } from 'react-router-dom';

const VideoUploadPage = () => {
    const { isLoginUser } = useSelector((state) => state.auth);
    const [movieVideo, setMovieVideo] = useState(null);
    const [movieImage, setMovieImage] = useState(null);
    const thisDate = new Date();
    const [movie, setMovie] = useState({
        movie_title: '',
        movie_body: '',
        movie_category: '',
        movie_image: null,
        movie_video: null,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMovie((prevMovie) => ({
            ...prevMovie,
            [name]: value,
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setMovie((movie) => ({ ...movie, movie_image: file }));
            setMovieImage(URL.createObjectURL(file));
        }
    };

    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setMovie((movie) => ({ ...movie, movie_video: file }));
            setMovieVideo(URL.createObjectURL(file));
            saveToIndexedDB(file);
        }
    };

    const saveToIndexedDB = (file) => {
        const request = indexedDB.open('videoDB', 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('videos')) {
                db.createObjectStore('videos', { keyPath: 'id', autoIncrement: true });
            }
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            const transaction = db.transaction('videos', 'readwrite');
            const store = transaction.objectStore('videos');
            store.add({ video: file });
        };
        request.onerror = (e) => {
            console.error('IndexedDB 에러:', e);
        };
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!movie.movie_title || !movie.movie_body || !movie.movie_image || !movie.movie_video) {
            alert('누락된 정보가 있습니다.');
        } else {
            dispatch(
                AddNewMovies({
                    movie_title: movie.movie_title,
                    movie_body: movie.movie_body,
                    movie_category: movie.movie_category,
                    movie_image: URL.createObjectURL(movie.movie_image),
                    movie_video: URL.createObjectURL(movie.movie_video),
                    movie_like_count: 0,
                    movie_channel: isLoginUser.user_email.split('@')[0],
                    movie_channel_id: isLoginUser.user_id,
                    movie_date: {
                        year: thisDate.getFullYear(),
                        month: thisDate.getMonth() + 1,
                        day: thisDate.getDate(),
                    },
                    movie_comments: [],
                    movie_video_type: 'video',
                })
            );
            navigate(`/studio/${isLoginUser.user_id}/content`);
            dispatch(getAllMovies());
        }
    };
    return (
        <VideoUploadPageWrap>
            <div className='inner'>
                <h2 className='studio-title'>동영상 업로드</h2>
                <form className='upload-form' onSubmit={onSubmit}>
                    <p>
                        <label htmlFor='movie_title'>제목</label>
                        <input
                            type='text'
                            name='movie_title'
                            id='movie_title'
                            className='movie_title'
                            value={movie.movie_title}
                            onChange={handleInputChange}
                            placeholder='영상 제목을 작성해 주세요'
                        />
                    </p>
                    <p>
                        <label htmlFor='movie_body'>설명</label>
                        <textarea
                            name='movie_body'
                            id='movie_body'
                            className='movie_body'
                            value={movie.movie_body}
                            onChange={handleInputChange}
                            placeholder='영상 소개글을 작성해 주세요'
                        ></textarea>
                    </p>
                    <p>
                        <label htmlFor='movie_category'>카테고리</label>
                        <input
                            type='text'
                            name='movie_category'
                            id='movie_category'
                            className='movie_category'
                            value={movie.movie_category}
                            onChange={handleInputChange}
                            placeholder='카테고리는 영문으로 작성해 주세요 ex) vloog'
                        ></input>
                    </p>
                    <p>
                        <label htmlFor='movie_image'>썸네일</label>
                        <input
                            type='file'
                            name='movie_image'
                            id='movie_image'
                            className='movie_image'
                            onChange={handleImageChange}
                        />
                        <div className='img-wrap'>
                            <p>미리보기</p>
                            {movieImage && <img src={movieImage} alt='썸네일 미리보기' />}
                        </div>
                    </p>
                    <p>
                        <label htmlFor='movie_video'>동영상</label>
                        <input
                            type='file'
                            name='movie_video'
                            id='movie_video'
                            className='movie_video'
                            onChange={handleVideoChange}
                        />
                        <div className='video-wrap'>
                            <p>미리보기</p>
                            {movieVideo && <video controls width='500' src={movieVideo}></video>}
                        </div>
                    </p>
                    <p>
                        <Button type='submit'>업로드</Button>
                    </p>
                </form>
            </div>
        </VideoUploadPageWrap>
    );
};

export default VideoUploadPage;
