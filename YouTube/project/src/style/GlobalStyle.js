import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';
import { media } from './media';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --youtube-red:#f00
  }
  html{
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: "Noto Sans KR";    
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  table {
    width: 100%;
  }
  input{
    box-sizing: border-box;
  }
  p,
  span{
    user-select: none;
  }
  .pc{
    display: block;
  }
  .mobile{
    display: none;
  }

  @media ${media.tablet} {
    html{
      font-size: 8px;
    }
  }
  @media ${media.mobile} {
    html{
      font-size: 6px;
    }
    .pc{
      display: none;
    }
    .mobile{
      display: block;
    }
    p,div,form,ul,li,span,input,button{
      box-sizing: border-box;
    }
    
  }
`;

export default GlobalStyle;
