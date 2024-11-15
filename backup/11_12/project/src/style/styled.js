import styled from 'styled-components';
import { media } from './media';

export const HeaderWrap = styled.header`
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 999;
    div {
        box-sizing: border-box;
    }
    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 2rem;
        .first-box {
            display: flex;
            align-items: center;
        }
        .logo-gif {
            max-width: 10rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                width: 100%;
            }
        }
        .logo {
            cursor: pointer;
        }
        .all-menu {
            .icon {
                margin-right: 2.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                padding: 0.8rem;
                border-radius: 50%;
                &:hover {
                    background-color: #f5f5f5;
                }
            }
        }
        .search-box {
            border: 1px solid #dcdcdc;
            box-sizing: border-box;
            border-radius: 2rem;
            overflow: hidden;
            width: 60rem;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: invert;
            input {
                width: 90%;
                height: 4rem;
                border: none;
                outline: none;
                text-indent: 2rem;
                font-size: 1.6rem;
            }
            .search-btn {
                width: 10%;
                height: 4rem;
                border: none;
                border-left: 1px solid #dcdcdc;
                cursor: pointer;
                background-color: #efefef;
                transition: all 0.3s;
                &:hover {
                    background-color: #dddd;
                }
            }
        }

        .search-history {
            position: absolute;
            background: #fff;
            border-radius: 1rem;
            min-width: 50rem;
            max-width: 56rem;
            padding: 1.5rem;
            box-shadow: #00000050 0px 1px 3px;
            top: 100%;
            left: 35%;
            z-index: 999;
            .search-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 2%;
                &:last-child {
                    margin-bottom: 0%;
                }
                &:hover {
                    background: #fafafa;
                }
                .search-keyword {
                    display: flex;
                    align-items: center;
                    width: 90%;
                    img {
                        margin-right: 3%;
                    }
                }
                .history-btn {
                    border: none;
                    background: none;
                    display: flex;
                    .close-btn {
                        width: 70%;
                    }
                }
            }
        }
        .user-menu {
            display: flex;
            justify-content: center;
            align-items: center;
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.8rem;
                border-radius: 50%;
                &:not(:last-of-type) {
                    margin-right: 1rem;
                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
                .user-profile {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background-color: var(--youtube-red);
                    box-sizing: border-box;
                    font-size: 1.4rem;
                    color: #fff;
                    width: 3rem;
                    height: 3rem;
                    position: relative;
                }
            }
        }
    }
    @media ${media.mobile} {
        .top {
            min-height: 8rem;
            .search-box {
                width: 40rem;
                border: none;
                &:hover {
                    border: 1px solid #dcdcdc;
                    input {
                        transform: scaleX(1);
                    }
                    .search-btn {
                        width: 10%;
                        height: 4rem;
                        border: none;
                        border-left: 1px solid #dcdcdc;
                        cursor: pointer;
                        background-color: #efefef;
                        transition: all 0.3s;
                        &:hover {
                            background-color: #dddd;
                        }
                        img {
                            width: 2.6rem;
                        }
                    }
                }
                input {
                    transition: all 0.3s;
                    transform: scaleX(0);
                    transform-origin: right;
                }
                .search-btn {
                    background-color: #fff;
                    border: none;
                    position: relative;
                    img {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 3rem;
                    }
                }
            }
        }
    }
`;

export const SideMenuWrap = styled.div`
    min-width: 25rem;
    z-index: 10;
    height: 100vh;
    overflow: scroll;
    position: sticky;
    top: 5.6rem;
    .channel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 10% 0;
        .channel-img-wrap {
            border-radius: 50%;
            overflow: hidden;
            width: 12rem;
            height: 12rem;
            margin-bottom: 6%;
            img {
                height: 100%;
            }
        }
        .channel-name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .my-channel-name {
                font-size: 1.2rem;
                color: #666;
                max-width: 16rem;
            }
        }
    }
    ul {
        border-bottom: 1px solid #dcdcdc;
        box-sizing: border-box;
        padding: 1.5rem 1rem;
        .menu-title {
            font-size: 1.6rem;
            margin-bottom: 1rem;
            padding: 0rem 1rem;
            display: flex;
            align-items: center;
            user-select: none;
            img {
                margin-left: 1rem;
            }
        }
        li {
            display: flex;
            width: 22rem;
            box-sizing: border-box;
            align-items: center;
            cursor: pointer;
            padding: 0.8rem 1rem;
            border-radius: 1rem;
            font-size: 1.4rem;
            &:hover {
                background-color: #dddd;
            }
            img {
                margin-right: 2rem;
            }
        }
    }
    .studiomenu-list {
        li {
            min-height: 5rem;
            color: #666;
            img {
                max-width: 2.6rem;
                max-height: 2.6rem;
            }
        }
    }
    .footer {
        width: 18rem;
        word-break: keep-all;
        font-size: 1rem;
    }
    .not-login-span {
        display: block;
        width: 20rem;
        font-size: 1.4rem;
        box-sizing: border-box;
        padding: 0 1rem;
        margin-bottom: 1rem;
    }
    .login-menu {
        width: 10rem;
    }
    .thisChannel-item {
        img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
        }
        .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;

export const LayoutWrap = styled.div`
    .content-wrap {
        display: flex;
        width: 100%;
    }
`;

export const StudioLayoutWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    header {
        box-shadow: rgba(0, 0, 0, 0.03) 0px 1rem 2.5rem -0.5rem,
            rgba(0, 0, 0, 0.04) 0rem 1rem 1rem -0.5rem;
    }
    .content-wrap {
        display: flex;
    }
    .studio-title {
        font-size: 2.6rem;
        font-weight: 500;
        margin-bottom: 3rem;
    }
    .inner {
        padding: 2%;
        box-sizing: border-box;
        width: 100%;
    }
`;

export const SpinnerWrap = styled.div`
    .spinner {
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .spinner-circle {
        width: 100%;
        height: 100%;
        background: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
        padding: 0.5rem 1rem;
    }

    .spinner-circle:before {
        z-index: 5;
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed #333;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s linear infinite;
    }

    .spinner-circle:after {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed #333;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s ease infinite;
        z-index: 10;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const WrongapproachWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 10%;
    .not {
        text-align: center;
        font-size: 2rem;
    }
`;
