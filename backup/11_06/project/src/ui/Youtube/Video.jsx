import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { VideoWrap } from "./styled";
import { SideMenuChange } from "../../store/modules/headerSlice";
import { removeWatchedVideo } from "../../store/modules/viewingRecordSlice";
import SaveList from "../SaveList/SaveList";

const Video = ({ movie }) => {
  const {
    movie_id,
    movie_title,
    movie_image,
    movie_video,
    movie_like_count,
    movie_date,
    movie_channel,
  } = movie;
  const { Channel } = useSelector((state) => state.channel);
  const { isSideMenu } = useSelector((state) => state.header);
  // 마우스 올렸을때 영상 재생 컨트롤
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();
  const movie_view_conunt = (movie_like_count) => {
    if (movie_like_count >= 10000) {
      return Math.floor(movie_like_count / 10000) + "만회";
    } else if (movie_like_count >= 1000) {
      return Math.floor(movie_like_count / 1000) + "천회";
    } else if (movie_like_count <= 1000) {
      return movie_like_count + "회";
    }
  };
  // 시청기록삭제
  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(removeWatchedVideo(movie_id));
  };
  const navigate = useNavigate();

  const [saveShow, setSaveShow] = useState(false);
  const handleShow = (e) => {
    e.stopPropagation();
    setSaveShow(!saveShow);
  };
  //외부 클릭 감지 핸들러
  const wrapRef = useRef(null);
  const outClick = (event) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target)) {
      setSaveShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", outClick);
    return () => {
      document.removeEventListener("mousedown", outClick);
    };
  }, []);

  return (
    <VideoWrap
      onClick={() => {
        navigate(`/watch/${movie_id}`);
        if (isSideMenu) dispatch(SideMenuChange());
      }}
      className="video-loder"
    >
      <div
        className="video-wrap"
        onMouseEnter={() => setPlay(true)}
        onMouseLeave={() => setPlay(false)}
      >
        {play ? (
          <iframe
            src={movie_video + "&controls=0"}
            title={movie_title}
            allowFullScreen={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            autoPlay="1"
          />
        ) : (
          <img src={movie_image} alt={movie_title} />
        )}
      </div>
      <div className="text-wrap">
        <div className="channel-logo">
          <img src={Channel[movie_channel].channel_image} alt="" />
        </div>
        <div className="movie_info">
          <p className="movie_title">{movie_title}</p>
          <p className="channel_name">{Channel[movie_channel].channel_name}</p>
          <p className="movie_like_count">
            조회수 {movie_view_conunt(movie_like_count)}
            <span className="movie_date">
              {movie_date.year}.{movie_date.month}.{movie_date.day}
            </span>
          </p>
        </div>
        {/* 11/4 서희원 추가  */}
        <div className="close-menu" onClick={handleDelete}>
          <img
            src="https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Close_Btn.svg"
            alt="close-menu"
          />
        </div>
        <div className="plus-menu" ref={wrapRef}>
          <img
            src="https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/See_more.svg"
            alt="pluse-menu"
            onClick={handleShow}
          />
          {saveShow && <SaveList movie={movie} />}
        </div>
      </div>
    </VideoWrap>
  );
};

export default Video;
