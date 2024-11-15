import styled from 'styled-components';

export const YouTubeWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
    .top-category {
        display: flex;
        margin-bottom: 2.6rem;
        .top-menu-li {
            margin-right: 1rem;
            &.active {
                .top-menu-button {
                    background-color: #000;
                    color: #fff;
                }
            }
            .top-menu-button {
                border-radius: 1rem;
                overflow: hidden;
                font-weight: 600;
                padding: 0.8rem 1.6rem;
            }
        }
    }
    .main-video-wrap {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .video-loder {
            width: 19.2%;
            &:not(:nth-child(5n)) {
                margin-right: 1%;
            }
            &:nth-child(5n) {
                .plus-menu {
                    .save-list {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        left: -20rem;
                    }
                }
            }
            margin-bottom: 2.2%;
            .text-wrap {
                .movie_info {
                    max-width: 26rem;
                }
            }
            .plus-menu {
                .save-list {
                    right: -750%;
                }
            }
        }
    }
    .main-banner {
        width: 100%;
        margin-bottom: 5rem;
        .main-banner-img {
            width: 100%;
        }
    }
    #scroll-anchor {
        min-height: 10rem;
        position: relative;
    }
`;
