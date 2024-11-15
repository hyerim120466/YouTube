import { BelowDetailWrap } from "./styled";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { PiUserSquareThin } from "react-icons/pi";

const BelowDetail = () => {
  return (
    <BelowDetailWrap>
      <div className="detail_inner">
        <p className="info">
          <span>조회수 xxxx회</span>
          <span className="desc">최초 공개:xxxx. xx. xx.</span>
        </p>
        <div className="hidden">
          <span>설명설명</span>
          <div className="script">
            <h2 className="script_title">스크립트</h2>
            <p className="script_desc">스크립트를 보면서 시청하세요</p>
            <button className="script_btn">스크립트 표시</button>
          </div>
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
          </div>
          <div className="but_container">
            <button className="channel_btn">
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
          <p className="briefly">간략히</p>
        </div>
      </div>
    </BelowDetailWrap>
  );
};

export default BelowDetail;
