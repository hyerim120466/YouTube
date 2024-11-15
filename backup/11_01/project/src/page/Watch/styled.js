import styled from 'styled-components';

export const WatchWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2% 3.5%;
    display: flex;

    .video-wrap {
        position: relative;
        width: 70%;
        margin: 0 auto;
        .videoInner {
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
            position: relative;
            border-radius: 2rem;
            overflow: hidden;
        }
        iframe {
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
    width: 25%;
    padding-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
