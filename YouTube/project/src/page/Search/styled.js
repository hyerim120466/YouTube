import styled from 'styled-components';
import { media } from '../../style/media';

export const SearchWrap = styled.div`
    height: 100%;
    margin: 2% auto;
    min-height: 100vh;
`;

export const SearchListWrap = styled.ul`
    width: 100rem;
    min-height: 100vh;
    .not-search {
    }
    .channel-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5%;
        .channel-profile {
            width: 50%;
            display: flex;
            justify-content: center;
            .channel-logo {
                border-radius: 50%;
            }
        }
        .channel-info {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 3%;
            button {
                width: 6vw;
                letter-spacing: -0.15rem;
            }
            .info-text {
                width: 75%;
                .name {
                    font-size: 2rem;
                }
                .info {
                    font-size: 1.4rem;
                    color: #777;
                    .username {
                        margin-right: 1.4rem;
                    }
                    .sub-count {
                        position: relative;
                        &::before {
                            content: '';
                            width: 0.4rem;
                            height: 0.4rem;
                            background: #777;
                            border-radius: 50%;
                            position: absolute;
                            top: 50%;
                            left: -12%;
                        }
                    }
                }
            }
        }
    }
    .video-loder {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 30rem;
        .video-wrap {
            width: 50%;
            overflow: unset;
            img,
            iframe,
            video {
                height: 50%;
                border-radius: 1rem;
            }
        }
        .text-wrap {
            width: 50%;
            margin-left: 2%;
            height: 100%;
            padding: 0.2rem 0;
            .movie_info {
                .movie_title {
                    font-size: 2rem;
                    font-weight: 500;
                }
                .movie_body {
                    display: block;
                    margin-top: 1rem;
                }
            }
        }
    }
    @media ${media.mobile} {
        width: 100vw;
        margin-bottom: 2%;
        overflow: hidden;
        .channel-item {
            display: flex;
            align-items: center;
            padding: 5% 0;
            border-bottom: 1px solid #eee;
            margin-bottom: 0;
            &:last-child {
            }
            .channel-profile {
                .channel-logo {
                    width: 40%;
                }
            }
            .channel-info {
                display: flex;
                flex-direction: column;
                align-items: start;
                width: 60%;
                .info {
                    color: #777;
                    display: flex;
                    flex-direction: column;
                    .sub-count {
                        &::before {
                            display: none;
                        }
                    }
                }
                button {
                    width: 20vw;
                    font-size: 90%;
                    margin-top: 5%;
                }
            }
        }
        .video-loder {
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 7%;
            .video-wrap {
                width: 100%;
                iframe,
                img {
                    height: 100%;
                    border-radius: 0%;
                }
            }
            .text-wrap {
                width: 100%;
                display: flex;
                .channel-logo {
                    display: flex;
                    width: 10%;
                    height: auto;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .movie_info {
                    width: 80%;
                    position: absolute;
                    left: 13%;
                    top: 20%;
                    .movie_title {
                        -webkit-line-clamp: 2;
                    }
                    .movie_body {
                        display: none;
                    }
                }
                .plus-menu {
                    top: 25%;
                    right: 5%;
                }
            }
        }
    }
`;

export const NoSearchWrap = styled.div`
    width: 100%;
    display: flex;
    @media ${media.mobile} {
        margin-top: 50%;
    }
    .no-search {
        margin: auto;
        box-shadow: #00000024 0.2rem 0.4rem 2rem;
        width: 50rem;
        border-radius: 1rem;
        padding: 2rem;
        box-sizing: border-box;
        text-align: center;
        .no-search-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        .no-search-desc {
            font-size: 1.4rem;
            color: #777;
        }
    }
`;
