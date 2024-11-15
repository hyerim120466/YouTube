import styled from 'styled-components';

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
`;
