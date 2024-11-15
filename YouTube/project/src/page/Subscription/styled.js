import styled from 'styled-components';
import { media } from '../../style/media';

export const SubscriptionWrap = styled.div`
    width: 100%;
    .subscriptInner {
        width: 60%;
        margin: 2rem auto;
        .subscriptH2 {
            font-size: 3.6rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
    }
    /* 11/13 김혜림 전체 추가 */
    @media ${media.mobile} {
        .subscriptInner {
            width: 100%;
            padding: 0 2rem;
        }
    }
`;
