import styled from 'styled-components';

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
        margin-bottom: 2%;
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
                    .movie_body {
                        display: block;
                        margin-top: 1rem;
                    }
                }
            }
        }
    }
`;

export const NoSearchWrap = styled.div`
    width: 100%;
    display: flex;
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
