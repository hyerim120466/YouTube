import React, { useState } from "react";
import { BelowDetailWrap } from "./styled";
import { useNavigate } from "react-router-dom";

const BelowDetail = ({
  movieBody,
  channelName,
  movie_date,
  movieLikeCount,
  channelSubscribers,
  channelImage,
}) => {
  const { year, month, day } = movie_date;
  const navigate = useNavigate();

  // 전체 콘텐츠의 가시성을 추적하는 상태
  const [isFullVisible, setIsFullVisible] = useState(false);

  // 가시성 전환 함수
  const toggleVisibility = () => {
    setIsFullVisible((prev) => !prev);
  };

  return (
    <BelowDetailWrap>
      <div className="detail_inner">
        <p className="info">
          <span>조회수 {movieLikeCount}회</span>
          <span className="desc">
            최초 공개: {year}. {month}. {day}.
          </span>
        </p>
        <div className="hidden">
          {isFullVisible ? (
            <>
              <span>{movieBody}</span>

              <div className="script">
                <h2 className="script_title">스크립트</h2>
                <p className="script_desc">스크립트를 보면서 시청하세요</p>
                <button className="script_btn">스크립트 표시</button>
              </div>
              <div className="channel">
                <div>
                  <img className="channelImg" src={channelImage} alt="" />
                </div>
                <div className="channel_detail">
                  <h2 className="channel_name">{channelName}</h2>
                  <p className="channel_subscribers">
                    구독자 {channelSubscribers}
                  </p>
                </div>
              </div>
              <div className="but_container">
                <button
                  className="channel_btn"
                  onClick={() => navigate("/channel")}
                >
                  <img
                    className="img"
                    src="https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/play.svg.svg"
                    alt=""
                  />
                  동영상
                </button>
                <button className="channel_btn">
                  <img
                    className="img"
                    src="https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/user.svg.svg"
                    alt=""
                  />
                  정보
                </button>
              </div>
              <div className="briefly" onClick={toggleVisibility}>
                간략히
              </div>
            </>
          ) : (
            <>
              <span className="more" onClick={toggleVisibility}>
                ...더보기
              </span>
            </>
          )}
        </div>
      </div>
    </BelowDetailWrap>
  );
};

export default BelowDetail;
