import styled from 'styled-components';
import { media } from '../../style/media';

export const MyPageWrap = styled.div`
    @media ${media.mobile} {
        width: 100%;
        min-height: 100vh;
        .feed-wrap {
            min-height: 0;
        }
    }
`;
