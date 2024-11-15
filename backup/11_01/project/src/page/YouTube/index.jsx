import { useEffect, useState } from 'react';
import { YouTubeWrap } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies } from '../../store/modules/channelSlice';
import Video from '../../ui/Youtube/Video';
import TopMenu from '../../components/main/TopMenu';
import menuData from '../../assets/api/TopMenu';

const YouTube = () => {
    const { allMovies } = useSelector((state) => state.channel);
    const [randomMenu, setRandomMenu] = useState(
        // all 을 제외한 menu 랜덤 돌리기
        menuData
            .filter((menu) => menu.category !== 'all')
            .sort(() => Math.random() - 0.5)
            .slice(0, 7)
    );
    //  active한 menu
    const [thisMenu, setThisMenu] = useState('all');
    const dispatch = useDispatch();

    useEffect(() => {
        if (allMovies.length === 0) dispatch(getAllMovies());
        document.title = `YouTube`;
    }, []);

    return (
        <YouTubeWrap>
            <ul className='top-category'>
                {/* all은 고정 */}
                <TopMenu
                    key={'16545641'}
                    name={'전체'}
                    category={'all'}
                    thisMenu={thisMenu}
                    setThisMenu={setThisMenu}
                />
                {/* 랜덤메뉴에서 map 돌리기 */}
                {randomMenu.map((menu) => (
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
                {/* 모든 영상에서 10개만 랜덤 돌리기 */}
                {allMovies
                    // all이면 모든 영상을 ,아니면 active의 category의 영상 출력
                    .filter((movie) =>
                        thisMenu === 'all' ? movie : movie.movie_category.includes(thisMenu)
                    )
                    .slice()
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 10)
                    .map((movie) => (
                        <Video key={movie.movie_id} movie={movie} />
                    ))}
            </ul>
            <div className='main-banner'>
                <img
                    className='main-banner-img'
                    src='https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_banner.jpg?raw=true'
                    alt=''
                />
            </div>
            <ul className='main-video-wrap'>
                {/* 모든 영상에서 10개만 랜덤 돌리기 */}
                {allMovies
                    .slice()
                    .sort(() => Math.random() - 0.7)
                    .slice(0, 10)
                    .map((movie) => (
                        <Video key={movie.movie_id} movie={movie} />
                    ))}
            </ul>
        </YouTubeWrap>
    );
};

export default YouTube;
