import styled from "styled-components";
import { media } from "../../style/media";

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
  /* 11/13 오후 김혜림 전체 추가 */
  @media ${media.mobile} {
    .subscript-select {
      width: 13rem;
      padding: 1rem;
      font-size: 2rem;
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
          content: "";
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
  /* 11/13 오후 김혜림 추가 */
  @media ${media.mobile} {
    .subscript-li {
      .subscript-li-img {
        width: 8rem;
        height: 8rem;
        margin-right: 1.6rem;
      }
      .subscript-channel-content {
        width: 63%;
        .content-channel-name {
          margin-bottom: 0;
        }
        .content-channel-engName,
        .content-channel-subscribers,
        .content-channel-introduction {
          font-size: 1.6rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: keep-all;
        }
      }
      .subscript-icon {
        .subscribers-btn {
          width: 100%;
          font-size: 1.6rem;
          .img {
            width: 30%;
          }
        }
      }
    }
  }
`;

export const NotSubscriptionWrap = styled.div`
  width: 100%;
  margin: 10rem 0;
  text-align: center;
  .Not_login_subscription_img {
    width: 18%;
  }
  .Not_login_subscription_title {
    display: block;
    font-size: 2.8rem;
    margin-bottom: 1.6rem;
  }
  .Not_login_subscription_desc {
    margin-bottom: 3rem;
  }
  .login_button {
    width: 10rem;
    margin: auto;
  }

  /* 11/15 김혜림 추가 */
  @media ${media.mobile} {
    .login_button {
      width: 15rem;
      .login-menu {
        .login-btn {
          font-size: 2rem;
        }
      }
    }
  }
`;
