import { createSlice } from '@reduxjs/toolkit';
import { Channel } from '../../assets/api/Channel';

const initialState = {
    Channel,
    allMovies: [],
};

export const channelSlice = createSlice({
    name: 'channelSlice',
    initialState,
    reducers: {
        // 10-31 김신영 작업
        // 채널 정보 수정
        ChangeChannelInfo(state, action) {},
        //
        AddNewChannel(state, action) {
            const { user_id, user_name, user_email } = action.payload;
            const emailPrefix = user_email.split('@')[0];
            const NewChannel = {
                channel_id: user_id,
                channel_name: user_name,
                channel_banner: 'https://via.placeholder.com/1000x120',
                channel_image: 'https://via.placeholder.com/80',
                channel_introduction: `안녕하세요 ${user_name} 채널 입니다.`,
                channel_subscribers: 0,
                Movies: [],
            };
            state.Channel[emailPrefix] = NewChannel;
            console.log(state.Channel[emailPrefix]);
        },
        // 영상 추가
        AddNewMovies(state, action) {
            const NewMove = { movie_id: Math.floor(Math.random() * 999999) };
        },
        // 영상 삭제
        DelMovies(state, action) {
            const { channel_name, movie_id } = action.payload;
            const channel = state.Channel[channel_name];
            channel.Movies = channel.Movies.filter((movie) => !movie_id.includes(movie.movie_id));
        },
        // 영상 수정
        ChangeMovies(state, action) {},
        // 댓글 추가
        AddNewMoviesComment(state, action) {
            const { movie_id, comment_user_name, comment_body } = action.payload;
            const newComment = {
                comment_id: Math.floor(Math.random() * 999999),
                comment_user_name,
                comment_body,
                date: new Date().toISOString(),
            };

            const movie = state.allMovies.find((movie) => movie.movie_id === movie_id);
            if (movie) {
                if (!movie.comments) {
                    movie.comments = [];
                }
                movie.comments.push(newComment);
            }
        },
        // 댓글 삭제
        DelMoviesComment(state, action) {},
        // 영상 좋아요 수 변경
        IsMovieChangeLike(state, action) {},
        // 전체 동영상 출력 시 실행하는 함수
        getAllMovies(state, action) {
            state.allMovies = [];
            Object.keys(state.Channel).forEach((channel) => {
                state.allMovies.push(...state.Channel[channel].Movies);
            });
        },
    },
});

export const {
    ChangeChannelInfo,
    AddNewChannel,
    AddNewMovies,
    DelMovies,
    ChangeMovies,
    AddNewMoviesComment,
    DelMoviesComment,
    IsMovieChangeLike,
    getAllMovies,
    SearchMovies,
} = channelSlice.actions;
export default channelSlice.reducer;
