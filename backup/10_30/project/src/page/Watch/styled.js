import styled from 'styled-components';

export const WatchWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 1.4%;
    .video-wrap {
        position: relative;
        width: 75%;
        padding-bottom: 42.14%;
        overflow: hidden;
        border-radius: 2rem;
        iframe {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
`;
