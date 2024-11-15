import styled from 'styled-components';

export const SubscriptSortWrap = styled.div`
    width: 100%;
    position: relative;
    .subscript-select {
        width: 9rem;
        background-color: rgba(0, 0, 0, 0.05);
        color: #0f0f0f;
        border-radius: 1rem;
        padding: 0.4rem 0.5rem.4rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 1.6rem;
        img {
            width: 1.8rem;
            margin-left: 0.5rem;
        }
    }
    .subscript-ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        border-radius: 1rem;
        box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.1);
        overflow: hidden;
        .simple-shadow {
            cursor: pointer;
        }
        li {
            background: #fff;
            padding: 1rem 16rem 1rem 1.2rem;
            font-size: 1.4rem;
            &:hover {
                background: #ececec;
            }
        }
    }
`;

export const SubscriptListWrap = styled.ul`
    width: 100%;
    .subscript-li {
        margin: 3rem 0;
        display: flex;
        justify-content: start;
        align-items: center;
        cursor: pointer;
        .subscript-li-img {
            width: 13.6rem;
            height: 13.6rem;
            border-radius: 50%;
            margin-right: 3rem;
        }
        .subscript-channel-content {
            width: 70%;
            .content-channel-name {
                display: block;
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            .content-channel-engName,
            .content-channel-subscribers,
            .content-channel-introduction {
                font-size: 1.2rem;
                padding-right: 1rem;
                color: #606060;
            }
            .content-channel-engName {
                position: relative;
                &::before {
                    content: '';
                    border-radius: 50%;
                    border: 1px solid #606060;
                    width: 0.05rem;
                    height: 0.05rem;
                    position: absolute;
                    top: 50%;
                    right: 0.4rem;
                }
            }
        }
        .subscript-icon {
            width: 20%;
            .icon-notification {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.6rem 1.6rem;
                font-size: 1.4rem;
                color: #333;
                &:hover {
                    background-color: #b3b3b3;
                }
                .button-icon-notification {
                    margin-right: 0.6rem;
                    width: 2.6rem;
                }
            }
        }
    }
`;
