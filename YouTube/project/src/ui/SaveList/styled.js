import styled from 'styled-components';
import { media } from '../../style/media';
export const SaveListWrap = styled.ul`
    padding: 1rem 0;
    position: absolute;
    top: 3rem;
    right: -400%;
    z-index: 500;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    width: 100%;
    min-width: 22rem;
    overflow: hidden;
    .save-item {
        display: flex;
        align-items: center;
        padding: 0.6rem 1.6rem;
        cursor: pointer;
        font-size: 1.4rem;
        &:hover {
            background-color: #f0f0f0;
        }
        img {
            margin-right: 0.8rem;
        }
    }
    /* 11/12 김혜림 전체 추가 */
    @media ${media.mobile} {
        width: 24rem;
        .save-item {
            font-size: 1.5rem;
            img {
                width: 3rem;
            }
        }
    }
`;
export const SavePopupWrap = styled.div`
    border: 1px solid #000;
    position: fixed;
    bottom: 5rem;
    left: ${(props) => props.left};
    padding: 1rem 1.6rem;
    border-radius: 1rem;
    background: #000;
    color: #fff;
    /* 11/15 김혜림 추가 */
    @media ${media.mobile} {
        left: 1rem;
        bottom: 10rem;
    }
`;
