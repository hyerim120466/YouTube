import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { LoginUser } from '../../assets/api/LoginUser';

const initialState = {
    LoginUser,
    // 현재 로그인 된 유저
    isLoginUser: {},
    isAuth: false,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        AddNewUser(state, action) {
            // 새로운 유저 회원가입 조건문 처리 해야함
            // 로그인, 로그아웃 등 기능은 별도로 구현 해야함
            const NewUser = { user_id: uuidv4() };
            state.LoginUser.push(NewUser);
            state.isLoginUser = NewUser;
            state.isAuth = true;
        },
        IsAddList(state, action) {
            // 시청기록 , 재생목록, 나중에 볼 동영상, 좋아요 표시한 동영상, 오프라인 저장 동영상 을 추가하는 동작
            // action.payload.type 으로 Viewing_Record,Playlist... 등을 받아와서 처리
            const { user_id, type } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            User[type].push();
            // 유저 안에서 정보를 바꿨기 때문에 현재 로그인한 유저에게 적용 해야함
            state.isLoginUser = User;
        },
        IsDelList(state, action) {
            // 시청기록 , 재생목록, 나중에 볼 동영상, 좋아요 표시한 동영상, 오프라인 저장 동영상 을 삭제하는 동작
            // action.payload.type 으로 Viewing_Record,Playlist... 등을 받아와서 처리
            const { user_id, type } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            User[type].filter();
            state.isLoginUser = User;
        },
        AddNewSearchList(state, action) {
            // 새로운 검색어 추가
            const { user_id } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);

            // 아래 객체에 코드 작성
            const NewSearch = { search_id: uuidv4() };

            User.user_search_list.push(NewSearch);
            state.isLoginUser = User;
        },
        DelSearchList(state, action) {
            // 최근 검색어 삭제
            const { user_id } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            User.user_search_list.filter();
            state.isLoginUser = User;
        },
        AddNewSubscription(state, action) {
            // 구독 목록 추가
            const { user_id } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            User.Subscription_Id.push();
            state.isLoginUser = User;
        },
        DelSubscription(state, action) {
            // 구독 목록 삭제
            const { user_id } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            User.Subscription_Id.filter();
            state.isLoginUser = User;
        },
    },
});

export const {
    AddNewUser,
    IsAddList,
    IsDelList,
    AddNewSearchList,
    DelSearchList,
    AddNewSubscription,
    DelSubscription,
} = authSlice.actions;
export default authSlice.reducer;
