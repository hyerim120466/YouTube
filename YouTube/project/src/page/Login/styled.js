import styled from 'styled-components';
import { media } from '../../style/media';

export const LoginWrap = styled.div`
    background: #e0e0e0;
    min-height: 100vh;
    display: flex;
    .login-container {
        box-sizing: border-box;
        width: 60%;
        margin: auto;
        border-radius: 4rem;
        background-color: #fff;
        display: flex;
        overflow: hidden;
        min-height: 40rem;
    }
    .left-con-box,
    .right-con-box {
        box-sizing: border-box;
        width: 50%;
        padding: 8% 0;
    }
    .left-con-box {
        padding: 4% 5rem;
        .logo-wrap {
            width: 6rem;
            height: 6rem;
            margin-bottom: 2rem;
            img {
                width: 100%;
            }
        }
        .title {
            color: #333;
            font-size: 4rem;
            font-weight: 500;
        }
    }
    .nav-youtube {
        display: inline-block;
        border-bottom: 1px solid #000;
        user-select: none;
        cursor: pointer;
        font-size: 1.4rem;
    }
    @media ${media.mobile} {
        background: #fff;
        .left-con-box,
        .right-con-box {
            width: 100%;
        }
        .login-container {
            flex-direction: column;
            padding: 5.5%;
            width: 100%;
            .left-con-box {
                padding: 0;
                .title {
                    font-size: 4.5rem;
                }
                .nav-youtube {
                    font-size: 160%;
                    margin: 1% 0;
                }
            }
        }
    }
`;
