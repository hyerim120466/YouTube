import styled from 'styled-components';

export const MyPageMenuWrap = styled.ul`
    width: 100%;
    .menu-item {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 2rem;
        border-bottom: 1px solid #dfdfdf;
        img {
            margin-right: 2rem;
        }
        .name {
            font-size: 2.4rem;
        }
    }
`;
