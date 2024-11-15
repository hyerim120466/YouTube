import styled from 'styled-components';
import { media } from '../../style/media';

export const LoginButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    padding: 0.6rem 0.8%;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: #dddd;
    }
    .account-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1rem;
    }
    .login-btn {
        font-size: 1.4rem;
    }
    @media ${media.mobile} {
        display: none;
    }
`;

export const UserMenuWrap = styled.ul`
    position: absolute;
    left: -18rem;
    top: 4rem;
    padding: 1rem 0;
    z-index: 999;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    width: 100%;
    min-width: 22rem;
    overflow: hidden;
    li {
        display: flex;
        align-items: center;
        padding: 0.6rem 1.6rem;
        cursor: pointer;
        font-size: 1.4rem;
        color: #333;
        &:hover {
            background-color: #f0f0f0;
        }
        img {
            margin-right: 0.8rem;
        }
    }
`;
