import styled from 'styled-components';

export const WatchWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2% 3.5%;
    display: flex;
    > .video-wrap {
        position: relative;
        width: 70%;
        margin: 0 2rem 0 0;
        .videoInner {
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
            position: relative;
            border-radius: 2rem;
            overflow: hidden;
        }
        iframe,
        video {
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
    display: flex;
    flex-direction: column;
    width: 30%;
    .sub_video_wrap {
        width: 100%;
    }
    .video-loder {
        display: flex;
        width: 100%;
        .video-wrap {
            width: 18rem;
            overflow: hidden;
            padding-bottom: 24%;
        }
        .text-wrap {
            width: 100%;
            max-width: 25rem;
            .channel-logo {
                display: none;
            }
            .movie_info {
                margin-left: 1rem;
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
