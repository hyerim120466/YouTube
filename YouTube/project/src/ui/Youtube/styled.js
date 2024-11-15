import styled from 'styled-components';
import { media } from '../../style/media';

export const VideoWrap = styled.li`
    cursor: pointer;
    width: 100%;
    .video-wrap {
        width: 100%;
        padding-bottom: 56%;
        position: relative;
        margin-bottom: 1rem;
        border-radius: 1rem;
        overflow: hidden;
        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        iframe,
        video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
    .text-wrap {
        position: relative;
        display: flex;
    }
    .channel-logo {
        min-width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        margin-right: 1rem;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .movie_title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        box-sizing: border-box;
        padding-right: 2.5rem;
    }
    .movie_body {
        display: none;
        font-size: 1.2rem;
        color: #999;
    }
    .movie_like_count,
    .channel_name {
        font-size: 1.4rem;
        color: #666;
    }
    .channel_name {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 70%;
    }
    .movie_date {
        margin-left: 1rem;
    }
    .movie_info {
        width: 100%;
        margin-bottom: 1%;
    }
    .close-menu {
        display: none;
        cursor: pointer;
    }
    .plus-menu {
        position: absolute;
        top: 0;
        right: 0;

        img {
            position: relative;
        }
    }
    .mobile_movie_like_count,
    .mobile_movie_date,
    .mobile_channel_name {
        display: none;
    }
    @media ${media.mobile} {
        .video-wrap {
            border-radius: 0;
        }
        .text-wrap {
            padding: 0 1.6rem;
            .channel-logo {
                margin-top: 0.6rem;
                width: 4rem;
                height: 4rem;
                margin-right: 2rem;
            }
            .movie_info {
                .movie_title {
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-bottom: -1rem;
                    font-size: 2.6rem;
                }
                .mobile {
                    width: 100%;
                    display: flex;
                    color: #666;
                    font-size: 2rem;
                    .mobile_movie_like_count {
                        display: block;
                        margin-right: 1rem;
                        position: relative;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        .mobile_movie_date {
                            display: inline-block;
                            margin-left: 1rem;
                            position: relative;

                            &::after {
                                content: '';
                                display: block;
                                position: absolute;
                                left: -0.6rem;
                                top: 50%;
                                transform: translateY(-50%);
                                width: 0.2rem;
                                height: 0.2rem;
                                border-radius: 50%;
                                background: #666;
                            }
                        }
                    }
                    .mobile_channel_name {
                        /* 11/15 김혜림 부분 수정 */
                        max-width: 25rem;

                        text-overflow: ellipsis;
                        word-break: keep-all;
                        display: inline-block;
                        white-space: nowrap;
                        margin-right: 1rem;
                        position: relative;
                        overflow: hidden;
                        padding-right: 1rem;
                        &::after {
                            content: '';
                            display: block;
                            position: absolute;
                            right: 0rem;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 0.2rem;
                            height: 0.2rem;
                            border-radius: 50%;
                            background: #666;
                        }
                    }
                }
                .channel_name,
                .movie_like_count {
                    display: none;
                }
            }
            .plus-menu {
                right: 1rem;
            }
        }
    }
`;
