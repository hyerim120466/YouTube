import styled from 'styled-components';

export const ChannelWrap = styled.div`
    /* background-color: black; */
    overflow: hidden;
    width: 100%;
    .channel_home{
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        h2 {
            margin-top: 1%;
            font-weight: 600;
            font-size: 150%;
        }
    }
    .test {
        display: flex;
        width: 100%;
        margin-top: 1%;
        .video-loder{
            width: 19.2%;

            &:not(:nth-child(5n)){
                margin-right: 1%;
            }
        }
    }
    .header_banner {
        display: block;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        height: 21.2109rem;
        /* background-color: #dddddd; */
        .channel_banner {
            height: 100%;
            img {
                display: inline-block;
                object-fit: cover;
                width: 100%;
                border-radius: 1.5rem;
                min-height: 1px;
                min-width: 1px;
            }
        }
    }
    .page_header {
        padding-top: 1.6rem;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        /* border: 1px solid #000; */
        .page_header_profile {
            display: flex;
            /* border: 1px solid red; */
            .header_left {
                margin-right: 16px;
                .channel_img {
                    border-radius: 50%;
                }
            }
            .header_right {
                .channel_name {
                    font-size: 2em;
                    font-weight: bold;
                }
                .channel_info {
                    color: #555;
                }
                .channel_desc {
                    margin-bottom: 1.2rem;
                    font-size: 1.4rem;
                }
                .subscribe_btn { //구독버튼
                    background: #000;
                    color: white;
                    font-size: 87.5%;
                    line-height: 36px;
                    border-radius: 5rem;
                    border: none;
                    padding: 0 1.6rem;
                    margin: 12px 0 8px 0;
                }

                .subscribed_btn {//구독중 버튼
                    background: #ededed;
                    color: black;
                    font-size: 87.5%;
                    line-height: 36px;
                    border-radius: 5rem;
                    border: none;
                    padding: 0 1.6rem;
                    margin: 12px 0 8px 0;
}
            }
        }
    }
    
    .channel_navbar {
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        border-bottom : 1px solid #e4e4e4;
        .inner {
            display: flex;
            line-height: 4.8rem;

            li {
                padding: 0 2% 0 2%;
                position: relative;
            }
            li::after{
                content:'';
                position: absolute;
                bottom:0;
                right:0;
                width: 100%;
                opacity: 0;
                transform:   scaleX(0);
                background-color: black;
                height:2px;
                transition : opacity 0.3s ease, transform 0.3s ease-in-out;
                
            }
            li.nav_active::after,
            li:hover::after {
                opacity: 1;
                transform:   scaleX(1);
            }
        }
    }
`;
export const ChannelHomeWrap = styled.div`
    border-bottom :1px solid #e4e4e4; 
    padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem);
    
    /* overflow: hidden; */
        .channel_home_inner {
            display: flex;
            /* border: 1px solid blue; */
            
        }
        .channel_mainvideo {
            width: 100%;
            padding: 24px 0 ;
            .video-loder{
                display: flex;
            
                
                .channel-logo {
                    display: none;
                }
                .video-wrap {
                    width:424px;
                    height: 238px;
                    padding-bottom: 0%;
                    margin-right: 20px; 
                    img, iframe{
                        width:424px;
                        height: 238px;
                    } }
                .text-wrap { }
            }
            .movie_info {
                
            }
            .channel_name,
            .pluse-menu {
                display: none;
            }
        }
    
`;

    
       
       
export const ChannelVideoWrap = styled.div``;