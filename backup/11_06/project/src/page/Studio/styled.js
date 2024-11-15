import styled from 'styled-components';

export const StudioWrap = styled.div`
    width: 100%;
    .content-box {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        > ul {
            box-sizing: border-box;
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid #dcdcdc;
            min-height: 20rem;
            min-width: 26%;
            margin: 0 2% 2% 0;
            button {
                margin-top: 1.6rem;
            }
        }
    }
    .title-h3 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
`;
