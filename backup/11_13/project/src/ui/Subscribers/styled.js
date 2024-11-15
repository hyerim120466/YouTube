import styled from 'styled-components';
import { media } from '../../style/media';
export const SubscribersBtnWrap = styled.div`
    button {
        max-height: 3.6rem;
    }
    .subscribers-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 1000%;
            margin-right: 0.4rem;
        }
    }
    .not-subscribers-btn {
        color: #fff;
        background-color: #212121;
        &:hover {
            background-color: #424242;
        }
    }
    .channel-btn {
        margin-right: 1rem;
    }
    @media ${media.mobile} {
        .subscribers-btn {
            width: 14vw;
            .img {
                width: 35%;
            }
        }
    }
`;
