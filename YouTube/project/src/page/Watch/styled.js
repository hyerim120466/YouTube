import styled from 'styled-components';
import { media } from '../../style/media';

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
    @media ${media.tablet} {
        display: block;
        .video-wrap {
            width: 100%;
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
            max-width: 22rem;
            overflow: hidden;
            padding-bottom: 24%;
        }
        .text-wrap {
            width: 100%;
            /* max-width: 25rem; */
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
    @media ${media.mobile} {
        display: block;
        width: 70%;
        .movie_title {
            display: block;
        }
        .video-loder {
            .video-wrap {
                max-width: 30rem;
                .movie_title {
                }
            }
        }
        .text-wrap {
        }
        .save-list {
        }
    }
    @media ${media.tablet} {
        display: block;
        width: 100%;
        .movie_title {
            display: block;
        }
        .video-loder {
            .video-wrap {
                max-width: 40rem;
                .movie_title {
                }
            }
        }
        .text-wrap {
        }
    }
`;
