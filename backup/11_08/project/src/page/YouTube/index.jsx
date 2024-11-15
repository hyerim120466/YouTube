import { useEffect, useRef, useState } from "react";
import { YouTubeWrap } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../../store/modules/channelSlice";
import Video from "../../ui/Youtube/Video";
import TopMenu from "../../components/main/TopMenu";
import menuData from "../../assets/api/TopMenu";
import Spinner from "../../components/Spinner";
import NoSearchItem from "../../components/Search/NoSearchItem";

const YouTube = () => {
  const { allMovies } = useSelector((state) => state.channel);
  const { isAuth } = useSelector((state) => state.auth);
  const [randomMenu] = useState(
    menuData
      .filter((menu) => menu.category !== "all")
      .sort(() => Math.random() - 0.5)
      .slice(0, 7)
  );
  const [thisMenu, setThisMenu] = useState("all");
  const dispatch = useDispatch();
  const [videoCount, setVideoCount] = useState(10);

  useEffect(() => {
    if (allMovies.length === 0) {
      dispatch(getAllMovies());
    }
    document.title = "YouTube";
    if (videoCount >= 110) setVideoCount(110);
  }, [dispatch, allMovies.length, videoCount]);

  // 무한 스크롤 상태
  const observerRef = useRef();
  const targetRef = useRef();

  // 초기 랜덤 정렬된 비디오 청크 상태
  const [videoChunks, setVideoChunks] = useState([]);

  // allMovies가 변경될 때 한 번만 실행하여 랜덤 섞기 후 청크로 분할
  useEffect(() => {
    if (allMovies.length > 0 && videoChunks.length === 0) {
      const shuffledMovies = allMovies.slice().sort(() => Math.random() - 0.5); // 전체 비디오 랜덤 섞기
      const chunks = [];
      for (let i = 0; i < shuffledMovies.length; i += 10) {
        chunks.push(shuffledMovies.slice(i, i + 10));
      }
      setVideoChunks(chunks);
    }
  }, [allMovies]);

  const loadMoreVideos = () => {
    setVideoCount((prevCount) => prevCount + 10);
  };

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

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // 스무스 스크롤 추가
    });
  }, []);

  if (allMovies)
    return (
      <YouTubeWrap>
        {isAuth ? (
          <>
            <ul className="top-category">
              <TopMenu
                key={"16545641"}
                name={"전체"}
                category={"all"}
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
            <ul className="main-video-wrap">
              {thisMenu === "all" &&
                videoChunks.length > 0 &&
                videoChunks[0]
                  .slice(0, 10)
                  .map((movie) => <Video key={movie.movie_id} movie={movie} />)}
              {thisMenu !== "all" &&
                allMovies
                  .filter((movie) => movie.movie_category.includes(thisMenu))
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 10)
                  .map((movie) => <Video key={movie.movie_id} movie={movie} />)}
            </ul>
            <div className="main-banner">
              <img
                className="main-banner-img"
                src="https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_banner.jpg?raw=true"
                alt="Main Banner"
              />
            </div>

            {videoChunks &&
              videoChunks
                .slice(1, Math.ceil(videoCount / 10))
                .map((chunk, index) => (
                  <ul key={`video-chunk-${index}`} className="main-video-wrap">
                    {chunk.map((movie) => (
                      <Video key={movie.movie_id} movie={movie} />
                    ))}
                  </ul>
                ))}

            <div id="scroll-anchor" ref={targetRef}>
              {videoCount !== allMovies?.length + 10 ? <Spinner /> : null}
            </div>
          </>
        ) : (
          <div className="no-login">
            <NoSearchItem />
          </div>
        )}
      </YouTubeWrap>
    );
};
export default YouTube;
