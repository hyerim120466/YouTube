import styled from 'styled-components';

export const YouTubeWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
    .test-wrap {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .video-loder {
            width: 19.2%;
            &:not(:nth-child(5n)) {
                margin-right: 1%;
            }
            margin-bottom: 1%;
        }
    }
`;
