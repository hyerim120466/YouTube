import { useEffect, useRef, useState } from 'react';
import { YouTubeWrap } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies } from '../../store/modules/channelSlice';
import Video from '../../ui/Youtube/Video';
import TopMenu from '../../components/main/TopMenu';
import menuData from '../../assets/api/TopMenu';
import Spinner from '../../components/Spinner';
import NoSearchItem from '../../components/Search/NoSearchItem';
import axios from 'axios';
import { AddNewUser } from '../../store/modules/authSlice';
const YouTube = () => {
    const { allMovies } = useSelector((state) => state.channel);
    const { isAuth, isLoginUser } = useSelector((state) => state.auth);
    const { isSideMenu } = useSelector((state) => state.header);
    const dispatch = useDispatch();
    // 무한 스크롤 상태
    const observerRef = useRef();
    const targetRef = useRef();
    const [randomMenu] = useState(
        menuData
            .filter((menu) => menu.category !== 'all')
            .sort(() => Math.random() - 0.5)
            .slice(0, 7)
    );
    const [thisMenu, setThisMenu] = useState('all');
    const [videoCount, setVideoCount] = useState(8);
    // 초기 랜덤 정렬된 비디오 청크 상태
    const [videoChunks, setVideoChunks] = useState([]);
    const [videoChunks2, setVideoChunks2] = useState([]);
    // allMovies가 변경될 때 한 번만 실행하여 랜덤 섞기 후 청크로 분할
    const [mainVideo, setMainVideo] = useState([]);
    const loadMoreVideos = () => {
        setVideoCount((prevCount) => prevCount + (isSideMenu ? 8 : 10));
    };
    const [userActivities, setUserActivities] = useState({});
    useEffect(() => {
        if (allMovies.length === 0) {
            dispatch(getAllMovies());
        }
        document.title = 'YouTube';
        if (videoCount >= allMovies.length) setVideoCount(allMovies.length + 10);
    }, [dispatch, allMovies.length, videoCount]);
    useEffect(() => {
        if (allMovies.length > 0) {
            const shuffledMovies = allMovies.slice().sort(() => Math.random() - 0.5);
            const chunks = [];
            const chunks2 = [];
            for (let i = 0; i < shuffledMovies.length; i += 10) {
                chunks.push(shuffledMovies.slice(i, i + 10));
            }
            for (let i = 0; i < shuffledMovies.length; i += 8) {
                chunks2.push(shuffledMovies.slice(i, i + 8));
            }
            setVideoChunks(chunks);
            setVideoChunks2(chunks2);
            setVideoCount(isSideMenu ? 8 : 10);
        }
    }, [allMovies]);
    useEffect(() => {}, [isSideMenu]);
    useEffect(() => {
        if (observerRef.current) observerRef.current.disconnect();
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        loadMoreVideos();
                    }
                });
            },
            { threshold: 1 }
        );
        // 요소가 존재할 때 observe 호출
        if (targetRef.current) {
            observerRef.current.observe(targetRef.current);
        }
        return () => {
            // 컴포넌트가 언마운트될 때 observer 해제
            if (observerRef.current && targetRef.current) {
                observerRef.current.unobserve(targetRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (isAuth) return;
        const AddUser = async () => {
            try {
                const res = await axios.get('https://geolocation-db.com/json/');
                const ip = res.data.IPv4;
                if (!isAuth && ip) {
                    dispatch(AddNewUser({ ip }));
                }
            } catch (error) {
                console.log(error);
            }
        };
        AddUser();
    }, [isAuth]);
    useEffect(() => {
        if (!isLoginUser) return;
        const movieCategory = Array.from(
            new Set(isLoginUser?.Viewing_Record?.map((record) => record.movie_category))
        );
        const searchList = Array.from(
            new Set(isLoginUser?.user_search_list?.map((item) => item.search))
        );
        setUserActivities({
            ...userActivities,
            movieCategory,
            searchList,
        });
    }, [isLoginUser?.Viewing_Record, isLoginUser?.user_search_list]);

    useEffect(() => {
        const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const randomCategory = userActivities?.movieCategory
            ? random(userActivities?.movieCategory)
            : null;
        const randomSearchTerm = userActivities?.searchList
            ? random(userActivities?.searchList)
            : null;
        const categoryFilter = randomCategory
            ? allMovies.filter((movie) => movie.movie_category.includes(randomCategory))
            : [];
        const titleFilter = randomSearchTerm
            ? allMovies.filter((movie) => movie.movie_title.includes(randomSearchTerm))
            : [];
        const filteredMovies = categoryFilter || titleFilter;
        const shuffledMovies = filteredMovies.sort(() => Math.random() - 0.5).slice(0, 10);
        if (shuffledMovies.length < 10) {
            const additionalMovies = allMovies
                .filter((movie) => !shuffledMovies.includes(movie))
                .sort(() => Math.random() - 0.5)
                .slice(0, 10 - shuffledMovies.length);
            setMainVideo([...shuffledMovies, ...additionalMovies]);
        } else {
            setMainVideo(shuffledMovies);
        }
    }, [userActivities]);

    if (!allMovies) return <Spinner />;
    if (allMovies)
        return (
            <YouTubeWrap width={isSideMenu ? '24.25%' : '19.2%'} $not={isSideMenu ? 4 : 5}>
                {userActivities?.movieCategory?.length !== 0 ||
                userActivities?.searchList?.length !== 0 ? (
                    <>
                        <ul className='top-category'>
                            <TopMenu
                                key={'16545641'}
                                name={'전체'}
                                category={'all'}
                                thisMenu={thisMenu}
                                setThisMenu={setThisMenu}
                            />
                            {randomMenu &&
                                randomMenu.map((menu) => (
                                    <TopMenu
                                        key={menu.id}
                                        name={menu.name}
                                        category={menu.category}
                                        thisMenu={thisMenu}
                                        setThisMenu={setThisMenu}
                                    />
                                ))}
                        </ul>
                        <ul className='main-video-wrap'>
                            {thisMenu === 'all'
                                ? mainVideo?.length === 0 && videoChunks.length !== 0
                                    ? videoChunks[0]
                                          .slice(0, isSideMenu ? 8 : 10)
                                          .map((movie) => (
                                              <Video key={movie.movie_id} movie={movie} />
                                          ))
                                    : mainVideo
                                          .slice(0, isSideMenu ? 8 : 10)
                                          .map((movie) => (
                                              <Video key={movie.movie_id} movie={movie} />
                                          ))
                                : allMovies
                                      .filter((movie) => movie.movie_category.includes(thisMenu))
                                      .sort(() => Math.random() - 0.5)
                                      .slice(0, isSideMenu ? 8 : 10)
                                      .map((movie) => <Video key={movie.movie_id} movie={movie} />)}
                        </ul>
                        <div className='main-banner'>
                            <img
                                className='main-banner-img'
                                src='https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_banner.jpg?raw=true'
                                alt='Main Banner'
                            />
                        </div>
                        {isSideMenu
                            ? videoChunks2
                                  .slice(0, Math.ceil(videoCount / 8))
                                  .map((chunk, index) => (
                                      <ul key={`video-chunk-${index}`} className='main-video-wrap'>
                                          {chunk.map((movie) => (
                                              <Video key={movie.movie_id} movie={movie} />
                                          ))}
                                      </ul>
                                  ))
                            : videoChunks
                                  .slice(0, Math.ceil(videoCount / 10))
                                  .map((chunk, index) => (
                                      <ul key={`video-chunk-${index}`} className='main-video-wrap'>
                                          {chunk.map((movie) => (
                                              <Video key={movie.movie_id} movie={movie} />
                                          ))}
                                      </ul>
                                  ))}
                        <div id='scroll-anchor' ref={targetRef}>
                            {videoCount !== allMovies?.length + 10 && <Spinner />}
                        </div>
                    </>
                ) : (
                    <div className='no-login'>
                        <NoSearchItem />
                    </div>
                )}
            </YouTubeWrap>
        );
};
export default YouTube;
