import { BelowWrap } from "./styled";
import { LuMoreHorizontal } from "react-icons/lu";
import BelowDetail from "./BelowDetail";
import { RiFlagLine } from "react-icons/ri";
import { useState } from "react";
import Comment from "./Comment";

const Below = ({ title }) => {
  const [showReport, setShowReport] = useState(false);

  const handleReportClick = () => {
    setShowReport((prev) => !prev);
  };

  return (
    <BelowWrap>
      <h2 className="title">{title}</h2>
      <div className="top">
        <div className="channel">
          <div>
            <img
              className="channelImg"
              src="https://yt3.googleusercontent.com/wNoNXmOpkCgBiPmx8pusWVLDeXIADKo1MhiYz22JBdpVxzCFII7kbZ9g8ihRh1oRszvrvwetgw=s160-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="channel_detail">
            <h2 className="channel_name">채널명</h2>
            <p className="channel_subscribers">구독자 xxx명</p>
          </div>
          <div className="subscribers">
            <button className="subscribers-btn">구독</button>
          </div>
        </div>

        <div className="action">
          <span className="Like">
            <button className="BelowBtn like">
              <img
                className="img"
                src="https://raw.githubusercontent.com/React-Project-Team1/data-center/ee727f8dfb7bcd0c51e97b02fc6c584acdb7cd2f/Icon/like.svg.svg"
                alt=""
              />
              <span className="BelowBtn_comment ">xx천</span>
            </button>
            <button className="BelowBtn">
              <img
                className="img"
                src="https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/dislike.svg.svg"
                alt=""
              />
            </button>
          </span>

          <button className="BelowBtn">
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/ee727f8dfb7bcd0c51e97b02fc6c584acdb7cd2f/Icon/share.svg.svg"
              alt=""
            />
            <span className="BelowBtn_comment">공유</span>
          </button>
          <button className="BelowBtn">
            <img
              className="img"
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg"
              alt=""
            />
            <span className="BelowBtn_comment">오프라인 저장</span>
          </button>
          <button className="BelowBtn">
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/ee727f8dfb7bcd0c51e97b02fc6c584acdb7cd2f/Icon/clip.svg.svg"
              alt=""
            />
            <span className="BelowBtn_comment">클립</span>
          </button>
          <button className="BelowBtn">
            <img
              src="https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg"
              alt=""
            />
            <span className="BelowBtn_comment">저장</span>
          </button>
          <button className="BelowBtn" onClick={handleReportClick}>
            <LuMoreHorizontal className="icons" />
          </button>
          {showReport && (
            <div className="report-text">
              <RiFlagLine /> 신고
            </div>
          )}
        </div>
      </div>
      <BelowDetail />
      <Comment />
    </BelowWrap>
  );
};

export default Below;
