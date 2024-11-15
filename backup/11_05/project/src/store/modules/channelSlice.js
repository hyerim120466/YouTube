import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
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
        // 영상 추가
        AddNewMovies(state, action) {
            const NewMove = { movie_id: uuidv4() };
        },
        // 영상 삭제
        DelMovies(state, action) {},
        // 영상 수정
        ChangeMovies(state, action) {},
        // 댓글 추가
        AddNewMoviesComment(state, action) {
            const NewComment = { comment_id: uuidv4() };
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
