import { createSlice } from '@reduxjs/toolkit';
import { Channel } from '../../assets/api/Channel';

const initialState = {
    Channel: JSON.parse(localStorage.getItem('YoutubeChannel')) || Channel,
    allMovies: JSON.parse(localStorage.getItem('YoutubeAllMovies')) || [],
};

export const channelSlice = createSlice({
    name: 'channelSlice',
    initialState,
    reducers: {
        ChangeChannelInfo(state, action) {
            // 채널 정보 수정 로직
            // 수정 후 로컬스토리지 업데이트
            localStorage.setItem('YoutubeChannel', JSON.stringify(state.Channel));
        },

        AddNewChannel(state, action) {
            const { user_id, user_name, user_email } = action.payload;
            const emailPrefix = user_email.split('@')[0];
            const NewChannel = {
                channel_id: user_id,
                channel_name: user_name,
                channel_banner: 'https://via.placeholder.com/1280x200',
                channel_image: 'https://via.placeholder.com/160x160',
                channel_introduction: `안녕하세요 ${user_name} 채널 입니다.`,
                channel_subscribers: 0,
                channel_nav: emailPrefix,
                Movies: [],
            };
            state.Channel[emailPrefix] = NewChannel;
            localStorage.setItem('YoutubeChannel', JSON.stringify(state.Channel));
        },

        AddNewMovies(state, action) {
            const NewMovie = { movie_id: Math.floor(Math.random() * 999999), ...action.payload };
            state.Channel[action.payload.movie_channel].Movies.push(NewMovie);
            localStorage.setItem('YoutubeChannel', JSON.stringify(state.Channel));
        },

        DelMovies(state, action) {
            const { channel_name, movie_id } = action.payload;
            const channel = state.Channel[channel_name];
            channel.Movies = channel.Movies.filter((movie) => !movie_id.includes(movie.movie_id));
            localStorage.setItem('YoutubeChannel', JSON.stringify(state.Channel));
        },

        ChangeMovies(state, action) {
            // 영상 수정 로직
            localStorage.setItem('YoutubeChannel', JSON.stringify(state.Channel));
        },

        AddNewMoviesComment(state, action) {
            const { movie_id, movie_channel, comment_body, comment_user_id, comment_user_name } =
                action.payload;

            const newComment = {
                comment_id: Math.floor(Math.random() * 99999),
                comment_body,
                comment_user_id,
                comment_user_name,
            };

            const thisMovie = state.Channel[movie_channel].Movies.find(
                (movie) => movie.movie_id === movie_id
            );
            thisMovie.movie_comments.push(newComment);
            localStorage.setItem('YoutubeChannel', JSON.stringify(state.Channel));
        },

        DelMoviesComment(state, action) {
            // 댓글 삭제 로직
            localStorage.setItem('YoutubeChannel', JSON.stringify(state.Channel));
        },

        IsMovieChangeLike(state, action) {
            // 좋아요 수 변경 로직
            localStorage.setItem('YoutubeChannel', JSON.stringify(state.Channel));
        },

        getAllMovies(state, action) {
            state.allMovies = [];
            Object.keys(state.Channel).forEach((channel) => {
                state.allMovies.push(...state.Channel[channel].Movies);
            });
            localStorage.setItem('YoutubeAllMovies', JSON.stringify(state.allMovies));
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
} = channelSlice.actions;
export default channelSlice.reducer;
