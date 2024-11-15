import styled from 'styled-components';

export const FeedWrap = styled.div`
width: 100%;
.inner {
    padding-top : 2.4rem;
    /* padding-right: calc(50% - 64.2rem); */
    padding-right: 35%;
    padding-left: calc(50% - 64.2rem);
    h2 {
        font-size: 4rem;
        line-height: 5rem;
        font-weight: 700;
    }
    
    .test {
            display: flex;
            flex-direction:  column;
            width: 100%;
            padding-top: 1.5%;
            margin-top:0;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                .video-wrap {
                    flex: 1 1 auto; 
                    max-width: 24.6rem; /* 최대 너비 설정 */
                    aspect-ratio: 16 / 9; /* 16:9 비율 */
                    padding-bottom: 0%;
                    margin-right: 1.5%; 
                   margin-bottom : 2%;
                   
                    img, iframe{
                        width: 100%; 
                        height: 100%; 
                        box-sizing: border-box;
                    } }
                }
                .text-wrap {
                    width:100%;
                    display: flex;
                    justify-content: space-between;
                    .movie_title {
                        font-size: 1.8rem;
                        line-height: 2.6rem;
                        font-weight: 400;
                        word-break: break-all;
                    }
                 
                    .channel-logo {
                    display: none;
                    }
                    .movie_info{
                        .movie_title{}
                        .channel_name{}
                        .movie_like_count{
                            .movie_date {display : none;}
                        }
                    }
                    .close-menu, 
                    .pluse-menu{
                        padding : 0 1rem;
                        img {
                            width:3rem;
                            height: 3rem;
                        }
                        position: relative;
                        text-align: center;
                      
                    }
                    .close-menu {
                        display: inline-block;
                    }
                    

            }
                }
            }
.viewing_record_menu {
    /* border:1px solid #000; */
    z-index: 10;
    position:fixed;
    top: 20rem;
    right: 15%;
    .search_wrap {
        display: flex; /* Flex 컨테이너로 설정 */
       flex-direction: column;
       .search {
        display:flex;
        margin-bottom: 1rem;
        border-bottom : 1px solid #000;
        img {
            width:3rem;
            height:3rem;
            padding:1rem;
            border-radius: 50%;
            /* background-color:#efefef; */
            
        }
        input {
            border:none;
            outline:none;
        }
       }
        
       .content {
        margin: 1rem 0;
        padding:0.8rem;
        border-radius: 5rem;
       display: flex;
        img {display: flex; margin-right: 3%;}
        p{}
        ;
       } .content:hover {
        background-color: #e5e5e5;
       }
    }
}
`;
export const ViewingRecordWrap = styled.div``;
