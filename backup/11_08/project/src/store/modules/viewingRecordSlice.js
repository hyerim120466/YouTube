import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    watchedVideos: [
        {
            //예시
            movie_id: 5961259,
            movie_title:
                '피할 수 없는 운명.. 귀신(鬼神) 보는 남자👻 (소름주의) [무엇이든 물어보살]',
            movie_body:
                '그의 눈앞에 시도 때도 없이 나타난다는 귀신들! 독실한 크리스천이지만 신묘한 능력 덕분에 모르는 사람들까지 점 봐달라고 찾아온다는데..',
            movie_image:
                'https://i.ytimg.com/vi/j-rZqBXHIic/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc5a2AFFlDSZ1NnUBbw6obVrfkKw',
            movie_video:
                'https://www.youtube.com/embed/j-rZqBXHIic?si=m8lX6Aec3_QXyyZh&autoplay=1&mute=1',
            movie_like_count: 91000,
            movie_category: 'talk',
            movie_channel: 'KBS_Joy',
            movie_channel_id: 741852,
            movie_date: { year: 2019, month: 11, day: 18 },
        },
        {
            movie_id: 58709456945,
            movie_title: '유명한 엄마를 둔 딸의 흔한 고민 [무엇이든 물어보살]',
            movie_body:
                '엄마가 유명해서 불편해요 SNS 중독 엄마와 팩트폭격기 딸의 한 치 양보 없는 썰전! ',
            movie_image:
                'https://i.ytimg.com/vi/pxPADFCRFY4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNtOffVDGsBO3Z0_nOhVcFH7FQoA',
            movie_video:
                'https://www.youtube.com/embed/pxPADFCRFY4?si=IeVxx9gJUd6fQE-p&autoplay=1&mute=1',
            // 동영상 좋아요 수
            movie_like_count: 48000,
            movie_category: 'talk',
            movie_channel: 'KBS_Joy',
            movie_channel_id: 741852,
            movie_date: {
                year: 2019,
                month: 5,
                day: 28,
            },
            movie_comments: [
                {
                    comment_id: 456852,
                    comment_body:
                        '부모님이 유명해서 고민돼요라고 나오려면 철구 딸은 돼야할 것 같은데 ㅋㅋㅋ 이쯤되면 ㄹㅇ 인생이 고민될만하지',
                    comment_user_id: 'test',
                    comment_user_name: 'Frog27beat',
                },
            ],
        },
    ],
};

const viewingRecordSlice = createSlice({
    name: 'viewingRecord',
    initialState,
    reducers: {
        addWatchedVideo: (state, action) => {
            state.watchedVideos.push(action.payload);
        },
        removeWatchedVideo: (state, action) => {
            state.watchedVideos = state.watchedVideos.filter(
                (video) => video.movie_id !== action.payload
            );
        },
    },
});

export const { addWatchedVideo, removeWatchedVideo } = viewingRecordSlice.actions;
export default viewingRecordSlice.reducer;
