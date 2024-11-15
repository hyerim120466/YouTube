import styled from "styled-components";

export const BelowWrap = styled.div`
  height: 4rem;
  padding: 1% 0;
  position: relative;
  .title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.8rem;
  }

  .top {
    padding: 1% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .channel {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      overflow: hidden;

      .channelImg {
        width: 4rem;
        margin-top: 0.5rem;
        border-radius: 2.5rem;
      }

      .channel_detail {
        margin-left: 1.2rem;
        margin-right: 2.4rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        white-space: nowrap;

        .channel_name {
          font-size: 1.7rem;
          font-weight: 600;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .channel_subscribers {
          font-size: 1.4rem;
          color: #606060;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    .subscribers {
      margin-left: 1.5rem;

      .subscribers-btn {
        color: #fff;
        background: #0f0f0f;
        padding: 0 1.56rem;
        height: 3.8rem;
        font-size: 1.4rem;
        border-radius: 3rem;
        border: none;
      }
      .on {
        color: #0f0f0f;
        background: rgba(0, 0, 0, 0.05);
      }
    }

    .action {
      display: flex;
      flex-wrap: nowrap;
      gap: 1rem; /* 버튼 간격 */
      .Like {
        .BelowBtn {
          position: relative;
          margin-left: 0;
          border-radius: 3rem 0 0 3rem;

          &:last-child {
            border-radius: 0 3rem 3rem 0;
            padding-left: 15px;

            &::after {
              content: "";
              height: 1.7rem;
              background: rgba(0, 0, 0, 0.1);
              position: absolute;
              left: 0;
              top: 1rem;
              width: 0.1rem;
            }
          }
          &:hover {
            background: rgba(0, 0, 0, 0.1);
          }
        }
      }

      .BelowBtn {
        height: 3.8rem;
        font-size: 1.4rem;
        background: rgba(0, 0, 0, 0.05);
        border: none;
        border-radius: 3rem;
        padding: 0.8rem 1.2rem;
        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  .BelowBtn_comment {
    margin-left: 0.9rem;
    vertical-align: top;
    font-size: 1.4rem;
    &.comment {
    }
  }
  .img {
    width: 2.2rem;
  }

  .report-text {
    width: auto;
    position: absolute;
    right: -4rem;
    top: 10rem;
    background: #fff;
    padding: 1%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 15px;
    z-index: 1;
  }
`;

export const BelowDetailWrap = styled.div`
  min-width: min(450px, 100%);
  background: rgba(0, 0, 0, 0.05);
  border-radius: 2rem;
  padding: 1%;
  font-size: 1.5rem;

  .info {
    .desc {
      margin-left: 1rem;
    }
  }
  .more {
    cursor: pointer;
  }

  .script {
    margin-top: 5rem;

    .script_title {
      font-size: 2rem;
      font-weight: 600;
    }

    .script_desc {
      font-size: 1.4rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: #7d7d7d;
    }
  }
  .script_btn {
    font-size: 1.6rem;
    height: 3.8rem;
    color: #065fd4;
    border-radius: 3rem;
    border: 1px solid #d4d4d4;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover {
      background: #dceafe;
      border: none;
    }
  }
  .channel {
    display: flex;
    align-items: center;
    margin-top: 5rem;

    .channelImg {
      width: 4rem;
      margin-top: 0.5rem;
      border-radius: 2.5rem;
    }

    .channel_detail {
      margin-left: 1.2rem;
      margin-right: 2.4rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .channel_name {
        font-size: 1.8rem;
        font-weight: 600;
      }

      .channel_subscribers {
        font-size: 1.3rem;
        color: #606060;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .channel_btn {
    font-size: 1.5rem;
    height: 3.8rem;
    border-radius: 3rem;
    border: 1px solid #d4d4d4;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .but_container {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    .icons {
      font-size: 1.8rem;
      margin-right: 1rem;
    }
  }
  .briefly {
    margin-top: 6rem;
    cursor: pointer;
  }
  .img {
    margin-right: 1rem;
  }
`;

export const CommentWrap = styled.div`
  .section {
    margin-bottom: 5rem;
  }
  .comment_top {
    margin-top: 2rem;
    display: flex;
    margin-bottom: 2rem;
    position: relative;

    .total_comment {
      font-size: 2rem;
      line-height: 2.8rem;
      font-weight: 700;
      margin-right: 2.5rem;
    }
  }

  .text {
    width: 12rem;
    position: absolute;
    left: 12rem;
    top: 2.5rem;
    background: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 15px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    z-index: 1;
  }
  .user_profile {
    width: 4rem;
    margin-top: 0.5rem;
  }
  .label_comment {
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .label {
    border: none;
    background: none;
    display: flex;
    vertical-align: bottom;
    text-align: center;
    cursor: pointer;
    .label_title {
      margin-left: 1.2rem;
      font-size: 1.4rem;
    }
  }
  .label_comment {
    padding: 1.5rem 1.8rem;
    text-align: left;
    font-size: 1.5rem;
  }
  .comment_inner {
    display: flex;
    vertical-align: middle;
    align-items: center;
    .comment_edit {
      width: 100%;
      margin-left: 2rem;
      margin-bottom: 1.3rem;
    }
    .comment_edit_input {
      border: none;
      border-bottom: 1px solid #d4d4d4;
      width: 100%;
      outline: none;
      height: 3.2rem;
      font-size: 1.4rem;
      transition: 250ms ease-in-out;
    }

    .comment_edit_input:focus {
      border-bottom: 2px solid #000;
    }
  }
  .comment_footer {
    display: flex;
    justify-content: space-between;
  }
  .emoji {
    margin-left: 6rem;
  }
  .btn {
    border-radius: 5rem;
    padding: 0.7rem 1.2rem;
    border: none;
    background: none;
    font-size: 1.4rem;
  }
  .cancel {
    margin-right: 1.5rem;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .btn_comment {
    background: rgba(0, 0, 0, 0.08);
    color: #646464;
  }
  .user_comment {
    margin-top: 2rem;
    display: flex;
    height: auto;
    position: relative;
  }
  .user-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--youtube-red);
    box-sizing: border-box;
    font-size: 1.6rem;
    color: #fff;
    width: 4rem;
    height: 4rem;
  }
  .comment_user {
    margin-bottom: 5rem;
  }
  .Like {
    display: block;
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin-left: -0.8rem;
    margin-top: 0.5rem;
  }
  .BelowBtn {
    border: none;
    background: none;
    margin-top: 0.5rem;
  }
  .BelowBtn_comment {
    text-align: center;
    vertical-align: 40%;
  }
  .comment_userId {
    margin-left: 1.5rem;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    position: absolute;
    left: 4.2rem;
    top: 0;

    .userId {
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.8rem;
      margin-bottom: 0.3rem;
    }
  }
`;
