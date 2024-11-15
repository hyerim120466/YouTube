import styled from 'styled-components';
import { media } from '../../style/media';

export const ChannelWrap = styled.div`
    /* background-color: black; */
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    padding: 2%;
    .channel_home {
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        h2 {
            margin-top: 1%;
            font-weight: 600;
            font-size: 150%;
        }
    }
    .search_results-wrap {
        display: flex;
        width: 100%;
        margin-top: 1%;
        flex-wrap: wrap;
        .video-loder {
            width: 19.2%;
            margin-bottom: 2%;
            &:not(:nth-child(5n)) {
                margin-right: 1%;
            }
        }
    }
    .header_banner {
        display: block;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        height: 21.2109rem;
        /* height: 21.21%; */
        /* background-color: #dddddd; */
        .channel_banner {
            height: 100%;
            img {
                display: inline-block;
                object-fit: cover;
                width: 100%;
                border-radius: 1.5rem;
                min-height: 1px;
                min-width: 1px;
            }
        }
    }
    .page_header {
        padding-top: 1.6rem;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        margin-bottom: 1rem;
        /* border: 1px solid #000; */
        .page_header_profile {
            display: flex;
            /* border: 1px solid red; */
            .header_left {
                margin-right: 16px;
                .channel_img {
                    border-radius: 50%;
                }
            }
            .header_right {
                .channel_name {
                    font-size: 2em;
                    font-weight: bold;
                }
                .channel_info {
                    color: #555;
                }
                .channel_desc {
                    max-width: 80rem;
                    margin-bottom: 1.2rem;
                    font-size: 1.4rem;
                    word-break: keep-all;
                }
            }
        }
    }

    .channel_navbar {
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        border-bottom: 1px solid #e4e4e4;
        .inner {
            display: flex;
            line-height: 4.8rem;
            align-items: center;
            li {
                padding: 0 2% 0 2%;
                position: relative;
                cursor: pointer;
                display: flex;
                justify-content: center;
            }
            li::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: 100%;
                opacity: 0;
                transform: scaleX(0);
                background-color: black;
                height: 2px;
                transition: opacity 0.3s ease, transform 0.3s ease-in-out;
            }
            li:hover::after {
                opacity: 0.5;
            }
            li.nav_active::after {
                opacity: 1;
                transform: scaleX(1);
            }
            //검색버튼
            .channel_search {
                padding-left: 1rem;
                padding-right: 0;
            }
            button {
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                border: none;
                padding: none;
                background-color: white;
                img {
                }
            }
            .search_input {
                outline: none;
                margin-left: 0.5rem;
                border-width: 0;
                border-bottom: 0.1rem solid #000;
            }
        }
    }
    button {
        max-height: 3.6rem;
    }

    @media ${media.mobile} {
        .header_banner {
            /* height: 13%; */
            /* height: 100px; */
            height: 15rem;
            .channel_banner {
                width: 100%;
                height: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        .page_header {
            .page_header_profile {
                .header_left {
                    display: flex;
                    align-items: center;
                    margin-right: 16px;
                    .channel_img {
                        width: 12.5rem;
                    }
                }
                .header-right {
                    .channel_name {
                        font-size: 26px;
                    }
                    .channel_info {
                        .channel_desc {
                        }
                    }
                }
            }
        }
        .channel_navbar {
            .inner {
                li {
                    line-height: 6rem;
                }
                .channel_search {
                    button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0;
                        img {
                            width: 3rem;
                        }
                    }
                    .search_input {
                        width: 100px;
                    }
                    .search_input::placeholder {
                        font-size: 70%;
                    }
                }
            }
        }
    }
`;
export const ChannelHomeWrap = styled.div`
    border-bottom: 0.1rem solid #e4e4e4;
    padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem);
    /* overflow: hidden; */
    .channel_home_inner {
        display: flex;
        /* border: 1px solid blue; */
    }
    .channel_mainvideo {
        width: 100%;
        padding: 2.4rem 0;
        .video-loder {
            display: flex;

            .channel-logo {
                display: none;
            }
            .video-wrap {
                width: 42.4rem;
                height: 23.8rem;
                padding-bottom: 0%;
                margin-right: 1%;
                img,
                iframe {
                    width: 42.4rem;
                    height: 23.8rem;
                }
            }
            .text-wrap {
                padding-left: 1%;
            }
        }
        .movie_info {
        }
        .channel_name,
        .pluse-menu {
            display: none;
        }
    }
    @media ${media.mobile} {
        .search_results-wrap {
            flex-direction: column;
            .video-loder {
                display: flex;
                width: 100%;
                .video-wrap {
                    width: 45%;
                    padding-bottom: 28%;
                }
                .text-wrap {
                    width: 55%;
                    overflow: hidden;
                    .channel-logo {
                        display: none;
                    }
                    .movie_info {
                        width: 100%;
                        .movie_title {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                            white-space: wrap;
                            text-overflow: ellipsis;
                            font-size: 2rem;
                            line-height: 2.5rem;
                            margin-bottom: 1%;
                            word-break: break-all;
                            padding-right: 4rem;
                        }
                        .mobile {
                            .mobile_channel_name {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        .channel_mainvideo {
            .video-loder {
                display: flex;
                flex-direction: column;
                width: 60rem;

                .video-wrap {
                    width: 100%;
                    height: 33rem;
                    img,
                    iframe {
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                    }
                }
                .text-wrap {
                    .channel-logo {
                        display: none;
                    }
                }
            }
        }
    }
`;

export const ChannelVideoWrap = styled.div`
    padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem);
    .channel_video_tab {
        padding-top: 1%;
        .sort_btn {
            border-radius: 0.5rem;
            background-color: #f2f2f2;
            border: none;
            padding: 0.5rem 1rem;
            margin-right: 1rem;
            font-size: 1.4rem;
            line-height: 2rem;
            font-weight: 500;
        }
        .sort_btn.active {
            background-color: black;
            color: white;
        }
        .channel_videolist {
        }
    }
    @media ${media.mobile} {
        .channel_video_tab {
            padding: 0;
            margin: 1.5rem 0;
        }
        .channel_videolist {
            .search_results-wrap {
                width: 100%;
                display: flex;
                flex-direction: column;
                .video-loder {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    .video-wrap {
                        width: 45%;
                        height: 15rem;
                        padding-bottom: 0%;
                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 1rem;
                        }
                    }
                    .text-wrap {
                        width: 55%;
                        padding: 0;
                        margin-left: 1.5rem;
                        .channel-logo {
                            display: none;
                        }
                        .movie_info {
                            display: inline-block;
                            width: 100%;
                            .movie_title {
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 3; /* 원하는 줄 수 설정 */
                                overflow: hidden;
                                white-space: wrap;
                                text-overflow: ellipsis;
                                font-size: 2rem;
                                line-height: 2.5rem;
                                margin-bottom: 1%;
                                word-break: break-all; /* 글자 단위로 줄바꿈 */
                                padding-right: 4rem;
                            }
                            .mobile_channel_name {
                                display: none;
                            }
                        }
                        .plus-menu {
                            right: 0;
                        }
                    }
                }
            }
        }
    }
`;
export const ChannelHomeListWrap = styled.div`
    /* padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem); */
    @media ${media.mobile} {
        h2 {
            font-size: 150%;
            font-weight: 700;
        }
        .search_results-wrap {
            width: 100%;
            display: flex;
            flex-direction: column;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .video-wrap {
                    width: 45%;
                    height: 15rem;
                    padding-bottom: 0%;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                    }
                }
                .text-wrap {
                    width: 55%;
                    padding: 0;
                    margin-left: 1.5rem;
                    .channel-logo {
                        display: none;
                    }
                    .movie_info {
                        display: inline-block;
                        width: 100%;
                        .mobile {
                            display: flex;
                            flex-direction: column;
                            .mobile_channel_name {
                                line-height: 2.2rem;
                            }
                            .mobile_movie_like_count {
                            }
                        }

                        .movie_title {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                            white-space: wrap;
                            text-overflow: ellipsis;
                            font-size: 2rem;
                            line-height: 2.5rem;
                            margin-bottom: 1%;
                            word-break: break-all;
                            padding-right: 4rem;
                        }
                    }
                    .plus-menu {
                        right: 0;
                    }
                }
            }
        }
    }
`;

export const SearchMovieWrap = styled.div`
    .search_results {
        /* padding-right: calc(50% - 64.2rem); */
        padding-left: calc(50% - 64.2rem);
        padding-right: 30%;
        flex-direction: column;
        .search_results-wrap {
            flex-direction: column;
            width: 100%;
            padding-top: 1.5%;
            margin-top: 0;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                border-bottom: 0.1rem solid #e4e4e4;
                margin: 0 1.5% 1.5% 0;
                .video-wrap {
                    width: 24.6rem;
                    height: 13.8rem;
                    padding-bottom: 0%;
                    margin-right: 1%;
                    margin-bottom: 1.5%;
                    img,
                    iframe {
                        width: 24.6rem;
                        height: 13.8rem;
                    }
                }
            }
            .text-wrap {
                width: 80%;
                display: flex;
                justify-content: space-between;
                .channel-logo {
                    display: none;
                }
                .movie_info {
                    .movie_title {
                    }
                    .channel_name {
                    }
                    .movie_like_count {
                        .movie_date {
                        }
                    }
                }
            }
        }
    }
    @media ${media.mobile} {
        margin-top: 10px;
        .search_results {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0%;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .video-wrap {
                    width: 45%;
                    height: 15rem;
                    padding-bottom: 0%;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                    }
                }
                .text-wrap {
                    width: 55%;
                    padding: 0;
                    margin-left: 1.5rem;
                    .channel-logo {
                        display: none;
                    }
                    .movie_info {
                        display: inline-block;
                        width: 100%;
                        .movie_title {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                            white-space: wrap;
                            text-overflow: ellipsis;
                            font-size: 2rem;
                            line-height: 2.5rem;
                            margin-bottom: 1%;
                            word-break: break-all;
                            padding-right: 4rem;
                        }
                        .mobile_channel_name {
                            display: none;
                        }
                    }
                    .plus-menu {
                        right: 0;
                    }
                }
            }
        }
    }
`;
