import styled from 'styled-components';

export const SubscribersListWrap = styled.ul`
    max-height: 24rem;
    .subscribers {
        font-size: 1.4rem;
        color: #666;
    }
    .subscribers-count {
        font-size: 4rem;
    }
`;

export const CommentListWrap = styled.ul`
    max-height: 46rem;
`;
export const CommentItemWrap = styled.li`
    display: flex;
    max-width: 40rem;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 2%;
    .comment-text-wrap {
        width: 75%;
        margin-right: 5%;
    }
    .comment-img-wrap {
        width: 20%;
        img {
            width: 100%;
        }
    }
    .user-profile {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2%;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        font-size: 1.2rem;
        background-color: ${({ userColor }) => userColor || 'var(--youtube-red)'};
        color: #fff;
    }
    .comment_body {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 1.4rem;
        max-width: 80rem;
    }
    .user {
        display: flex;
        align-items: center;
        margin-bottom: 1%;
        color: #666;
        font-size: 1.2rem;
    }
    .comment_title-wrap {
        display: none;
        font-size: 1.2rem;
        width: 20rem;
        margin-left: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.6rem; /* 한 줄의 높이 설정 */
        max-height: 3.2rem; /* 두 줄의 높이에 맞추어 설정 */
    }
`;

export const MovieListWrap = styled.ul`
    .movie-list {
        width: 100%;
        min-width: 46rem;
        .video-loder {
            width: 100%;
            display: flex;
            .video-wrap {
                width: 100%;
                max-width: 20rem;
                padding-bottom: 24%;
                margin-right: 5%;
            }
            .channel-logo {
                display: none;
            }
            .plus-menu {
                display: none;
            }
            .movie_title {
                padding-right: 0;
                max-width: 30rem;
            }
            .text-wrap {
                max-width: 22rem;
            }
        }
    }
`;

export const CommentPageWrap = styled.div`
    width: 100%;
    .comment-nav-bar {
        width: 100%;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        padding: 0 4rem;
        .comment-tab {
            padding: 1.4rem;
            display: inline-block;
            cursor: pointer;
            position: relative;
            &::after {
                content: '';
                width: 100%;
                height: 0.2rem;
                background-color: #000;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
    }
    .comment-list {
        width: 100%;
        .comment-item {
            max-width: 100%;
            border-bottom: 1px solid #ddd;
            margin-bottom: 0;
            box-sizing: border-box;
            padding: 1%;
            .user-profile {
                margin-right: 1rem;
            }
            .comment-img-wrap {
                max-width: 16rem;
                img {
                    height: 100%;
                }
            }
            .comment_title-wrap {
                display: -webkit-box;
            }
        }
    }
`;
export const ContentPageWrap = styled.div`
    width: 100%;
    .del-menu {
        background-color: #212121;
        width: 100%;
        height: 0;
        display: flex;
        align-items: center;
        color: #fafafa;
        box-sizing: border-box;
        padding: 0 4rem;
        p {
            font-weight: 400;
            font-size: 1.4rem;
        }
        .selectedMovies-length {
            margin-right: 4rem;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                width: 0.1rem;
                height: 100%;
                right: -2rem;
                top: 0;
                background-color: #fafafa;
                opacity: 0.2;
            }
        }
        .del-btn {
            cursor: pointer;
            padding: 0 1rem;
            text-align: center;
            transition: all 0.2s;
            &:hover {
                background-color: #424242;
            }
        }
        overflow: hidden;
        transition: all 0.2s;
        &.active {
            height: 6rem;
        }
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 1.2rem;
    }
    thead th {
        color: #666;
        font-weight: bold;
        padding: 1.2rem;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        text-align: left;
    }
    tbody td {
        padding: 1rem;
        border-bottom: 1px solid #ddd;
        color: #555;
        vertical-align: top;
        &:first-child {
            width: 3rem;
        }
        &.movie_video {
            min-width: 8rem;
        }
        &.movie_info {
            max-width: 24rem;
        }
        .movie_body {
            max-width: 40rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #999;
        }
    }
    .video-loder {
        .video-wrap {
            margin: 0;
        }
        .text-wrap {
            display: none;
        }
    }
`;

export const VideoUploadPageWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    .upload-form {
        max-width: 140rem;
        box-sizing: border-box;
        padding: 0 2%;
        > p {
            margin-bottom: 2%;
        }
        label {
            display: block;
            font-size: 1.4rem;
            color: #999;
        }
        .movie_title,
        .movie_body,
        .movie_category {
            width: 100%;
            padding: 1rem;
            box-sizing: border-box;
            border-radius: 1rem;
            border: 1px solid #333;
            font-size: 1.6rem;
            color: #666;
        }
        .movie_category {
            max-width: 40rem;
        }
        .video-wrap,
        .img-wrap {
            margin: 1% 0;
            img {
                max-height: 40rem;
            }
            video {
                max-height: 40rem;
            }
        }
        button {
            background-color: #000;
            color: #fafafa;
            &:hover {
                background-color: #212121;
            }
        }
    }
`;
