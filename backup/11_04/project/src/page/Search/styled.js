import styled from 'styled-components';

export const SearchWrap = styled.div`
    height: 100%;
    margin: auto;
`;

export const SearchListWrap = styled.ul`
    width: 100rem;
    position: absolute;
    left: 25%;
    top: 10%;
    .video-loder {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 30rem;
        .video-wrap {
            width: 50%;
            overflow: unset;
            img,
            iframe {
                height: 50%;
                border-radius: 1rem;
            }
        }
        .text-wrap {
            width: 50%;
            margin-left: 2%;
            height: 100%;
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
