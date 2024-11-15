import styled from 'styled-components';
import { media } from '../../style/media';

export const LoginFormWrap = styled.form`
    &.login-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .login-input,
        .failed-input {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 5%;
            input {
                border: 1px solid #ddd;
                border-radius: 0.9rem;
                outline: invert;
                text-indent: 2rem;
                font-size: 1.6rem;
                height: 5rem;
                margin-bottom: 5%;
                width: 40rem;
            }
        }
        .failed-input {
            label {
                font-size: 1.4rem;
                margin-bottom: 1rem;
                color: #ed1d24;
            }
            input {
                border: 1px solid #ed1d24;
            }
        }
        .btn-wrap {
            margin-top: 2rem;
            width: 40rem;
            display: flex;
            justify-content: end;
            align-items: center;
            .join-btn {
                margin-left: 1rem;
                background-color: #212121;
                color: #fff;
                &:hover {
                    background-color: #424242;
                }
            }
        }
        input {
            &.password {
                transition: all 0.5s;
                height: 0;
                opacity: 0;
            }
            &.active {
                height: 5rem;
                opacity: 1;
            }
        }
    }
    @media ${media.mobile} {
        &.login-box {
            display: flex;
            align-items: end;
            .login-input,
            .failed-input {
                width: 100%;
                margin: 0;
                align-items: start;
                input {
                    width: 100%;
                    height: 10rem;
                    font-size: 150%;
                    margin-bottom: 3%;
                }
                label {
                    font-size: 100%;
                }
            }
            .btn-wrap {
                width: 50%;
                button {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    font-size: 100%;
                }
            }
        }
    }
`;

export const QuickLoginWrap = styled.ul`
    box-sizing: border-box;
    padding: 0 2rem;
    .login-item {
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #dcdcdc;
        padding: 1%;
        box-sizing: border-box;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
            background-color: #eeeeee;
        }
    }
    .profile-wrap {
        background-color: var(--youtube-red);
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fafafa;
        font-size: 1.2rem;
        margin-right: 1.2rem;
    }
    .account-wrap {
        width: 3rem;
        height: 3rem;
        margin-right: 1.2rem;
        padding: 1.4% 1%;
        img {
            width: 100%;
        }
    }
    @media ${media.mobile} {
        padding: 0;
        .login-item {
            padding: 8% 0;
            height: 6vh;
            .profile-wrap {
                width: 5rem;
                height: 5rem;
                font-size: 140%;
            }
            .text-wrap {
                font-size: 150%;
                margin-left: 5px;
                .user-email {
                    font-size: 80%;
                }
            }
            .account-wrap {
                width: 4rem;
                height: 4rem;
            }
        }
    }
`;

export const JoinFormWrap = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .join-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    input {
        border: 1px solid #dcdcdc;
        border-radius: 0.9rem;
        outline: invert;
        text-indent: 2rem;
        font-size: 1.6rem;
        height: 0;
        opacity: 0;
        margin-bottom: 2%;
        width: 40rem;
        transition: all 0.5s;
        &.active {
            height: 5rem;
            opacity: 1;
        }
    }
    .btn-wrap {
        margin-top: 2rem;
        width: 40rem;
        display: flex;
        justify-content: end;
        align-items: center;
        .cancel-btn {
            margin-left: 1rem;
            background-color: #212121;
            color: #fff;
            &:hover {
                background-color: #424242;
            }
        }
    }
    @media ${media.mobile} {
        display: flex;
        align-items: end;
        .join-wrap {
            width: 100%;
            input {
                width: 100%;
                height: 10rem;
                font-size: 150%;
                margin-bottom: 3%;
            }
        }
        .btn-wrap {
            width: 45%;
            button {
                width: 100%;
                font-size: 100%;
            }
            .join-btn {
                width: 45%;
            }
        }
    }
`;
