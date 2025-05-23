import styled from 'styled-components';

export const SearchWrap = styled.div`
    height: 100%;
    margin: 2% auto;
`;

export const SearchListWrap = styled.ul`
    width: 100rem;
    .channel-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2%;
        button {
            max-height: 3.6rem;
        }
        .subscribers-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                height: 1000%;
            }
        }
        .not-subscribers-btn {
            color: #fff;
            background-color: #212121;
            &:hover {
                background-color: #424242;
            }
        }
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
            .into-text {
                .name {
                    font-size: 2rem;
                }
                .info {
                    font-size: 1.4rem;
                    color: #777;
                }
            }
            .channel-btn {
                background-color: #000;
                color: #fff;
                &:hover {
                    background-color: #333;
                }
            }
        }
    }
    .movie-item {
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
                }
            }
        }
    }
`;

export const NoSearchWrap = styled.div`
    width: 50rem;
    height: 13rem;
    border-radius: 1rem;
    padding: 1rem;
    text-align: center;
    box-shadow: #00000024 2px 4px 20px;
    display: flex;
    position: absolute;
    top: 10%;
    left: 35%;
    .no-search {
        margin: auto;
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
