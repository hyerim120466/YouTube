import styled from 'styled-components';
import { media } from '../style/media';

export const Button = styled.button`
    background-color: #eeeeee;
    border-radius: 2rem;
    border: none;
    padding: 1.5rem 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #e0e0e0;
    }
    @media ${media.mobile} {
        /* width: 100%; */
        font-size: 100%;
    }
`;
