import styled from "styled-components";

export const WatchWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2% 3.5%;
  display: flex;

  .video-wrap {
    position: relative;
    width: 70%;
    margin: 0 auto;
    .videoInner {
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
      position: relative;
      border-radius: 2rem;
      overflow: hidden;
    }
    iframe {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export const WatchListWrap = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  .sub_video_wrap {
    width: 100%;
    margin-left: -4.2rem;
  }
  .video-loder {
    display: flex;
    margin-bottom: 1.6rem;
    .video-wrap {
      width: 18rem;
      overflow: hidden;
      padding-bottom: 24%;
    }
    .text-wrap {
      width: 100%;
      max-width: 20rem;

      .channel-logo {
        display: none;
      }
      .movie_info {
        margin-left: -2rem;
        .movie_title {
          font-size: 1.4rem;
          word-break: break-all;
        }
        .channel_name,
        .movie_like_count {
          font-size: 1.2rem;
        }
      }
    }

    .save-list {
      right: -5rem;
    }
  }
`;
