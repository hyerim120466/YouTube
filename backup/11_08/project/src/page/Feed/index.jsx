import { Link, useParams } from "react-router-dom";
import { FeedWrap } from "./styled";
import { useSelector } from "react-redux";
import Video from "../../ui/Youtube/Video";

const Feed = () => {
  const { Category } = useParams();
  const { isLoginUser } = useSelector((state) => state.auth);
  const getCategory = () => {
    switch (Category) {
      case "Viewing_Record":
        return "시청 기록";
      case "Playlist":
        return "재생 목록";
      case "Later_Watch":
        return "나중에 볼 동영상";
      case "like_Movie_List":
        return "좋아요 표시한 동영상";
      // case 'Download_List':
      //     return '오프라인 저장 동영상';
      default:
        return "피드";
    }
  };

  return (
    <FeedWrap>
      <div className="hearder">
        <div className="inner">
          <h2>{getCategory()}</h2>
        </div>
      </div>
      <div className="viewing_content">
        <div className="inner">
          {/* 시청한 동영상 출력 */}
          <ul className="test">
            {isLoginUser[Category]?.map((movie) => (
              <Video key={movie.movie_id} movie={movie} type={Category} />
            ))}
          </ul>
        </div>
      </div>
      <div className="page_menu">
        <div className="search_wrap">
          <div className="search">
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Search.svg"
              alt="시청기록검색"
            />
            <input type="text" placeholder="시청 기록 검색" />
          </div>

          <div className="content">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC" />
            <p>시청 기록 지우기 </p>
          </div>
          <div className="content">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhZJREFUSEu11UnojlEUx/HPXzJEip0hlAVFSLFSrGRIQoYFSkkSsZAFMoSVpEwlC0KJhWSMspBhJ1Mkc7JVpAwR7qn71vN/vHO97+p5nvfc+z33nN/53S4d/nV1eH+NAL2xEDMxASPxF+/xCNdxAb9qJVoPMAtH86b1Dvoaa3CrWlAtwM6U6Y684APO4Soe528TMReLMSx/24T9ZUg1QGXzr1iGy7ks1RLsgUU4gb7YgIPFwDIgsrqE7ynjyWnxsyZFMAX3EMBpuFtZVwT0x0sMxnKcaXLzSthGHMCL1PjxlcYXAWtxJNX1OcbVKUstbq+srkhwPi5GYBFwDaGcdRlU3CikWYwvv1di92ILjmN1GfAx/TEUo/C2lGazgKm4g4epl5PKgG9ZCaGGH20CBuETPmNgGRCyjEYPQDy3U6JY+yWvj+duPYjuj84KeNomIMryIAtlbBlwNklsKTZjX5uAbdid+ng69XFFGRDaP4VXGIM/Lc5BzzQ/bzAcS3C+DIjmRpkiYGUyuZMtAtZnm4hhjUH7WQbE+wzcaMMqwlbuZ6uYnqXabXCKyW7FnqyGMLsrdU4S3hPliMHqlyQapzhcjK9l19uTwnblwHfZrmPSnyAsIaxkXnbSIdlWwkkPlZOpd+HMScZ3LE93vXbEhbMKt6sFNboy+6SsF2B2btyInG2oJfR+M5va71oZNAK0KKT/wzsO+Afx62wZ7JyvrQAAAABJRU5ErkJggg==" />
            <p>시청 기록 일시중지</p>
          </div>
        </div>
      </div>
    </FeedWrap>
  );
};

export default Feed;
