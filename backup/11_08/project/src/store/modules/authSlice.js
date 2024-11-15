import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../../assets/api/LoginUser";

const initialState = {
  LoginUser,
  // 현재 로그인 된 유저
  isLoginUser: {},
  isAuth: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // 10-31 김신영님 작업
    UserLogin(state, action) {
      const { user_email, user_password } = action.payload;
      // 입력한 정보와 일치하는 유저 찾기
      const thisUser = state.LoginUser.find(
        (user) =>
          user.user_email === user_email && user.user_password === user_password
      );
      if (thisUser) {
        // 이메일과 비밀번호 모두 일치하는 경우에만 로그인 성공
        state.isAuth = true;
        state.isLoginUser = thisUser;
      } else {
        // 로그인 실패 시
        state.isAuth = false;
        state.isLoginUser = {};
      }
    },

    UserLogout(state) {
      state.isAuth = false;
      state.isLoginUser = null;
      // localStorage 처리...
    },
    // 10-31 김신영님 작업끝
    // 11-08 고건영 작업
    AddNewUser(state, action) {
      // 새로운 유저 회원가입 조건문 처리 해야함
      // 로그인, 로그아웃 등 기능은 별도로 구현 해야함
      const NewUser = {
        user_id: Math.floor(Math.random() * 1000000),
        ...action.payload,
        user_search_list: [],
        // 시청 기록
        Viewing_Record: [
          // 동영상 정보
        ],
        // 재생 목록
        Playlist: [],
        // 나중에 볼 동영상
        Later_Watch: [],
        // 좋아요 표시한 동영상
        like_Movie_List: [],
        // 오프라인 저장 동영상
        Download_List: [],
        // 구독한 채널 아이디
        Subscription_Id: [],
      };
      state.LoginUser.push(NewUser);
      state.isLoginUser = NewUser;
      state.isAuth = true;
    },
    IsAddList(state, action) {
      // 시청기록 , 재생목록, 나중에 볼 동영상, 좋아요 표시한 동영상, 오프라인 저장 동영상 을 추가하는 동작
      // action.payload.type 으로 Viewing_Record, Playlist... 등을 받아와서 처리
      const { user_id, type, movie } = action.payload; // 추가할 동영상 정보는 movie로 전달됨
      const User = state.LoginUser.find((user) => user.user_id === user_id);
      if (User && User[type]) {
        // 중복 데이터 체크
        const existingIndex = User[type].findIndex(
          (item) => item.movie_id === movie.movie_id
        );
        if (existingIndex !== -1) {
          // 중복 데이터가 있는 경우, 오래된 요소를 제거하고 새로운 데이터를 추가
          User[type].splice(existingIndex, 1); // 오래된 데이터 삭제
        }
        User[type].push(movie); // type에 해당하는 배열에 추가

        // 최근 시청한 동영상 위쪽 정렬
        User[type].sort((a, b) => {
          return (
            new Date(
              b.movie_date.year,
              b.movie_date.month - 1,
              b.movie_date.day
            ) -
            new Date(
              a.movie_date.year,
              a.movie_date.month - 1,
              a.movie_date.day
            )
          );
        });
        state.isLoginUser = User; // 변경 사항 적용
      }
    },
    IsDelList(state, action) {
      // 시청기록 , 재생목록, 나중에 볼 동영상, 좋아요 표시한 동영상, 오프라인 저장 동영상 을 삭제하는 동작
      // action.payload.type 으로 Viewing_Record,Playlist... 등을 받아와서 처리
      const { user_id, type, movie } = action.payload;
      const User = state.LoginUser.find((user) => user.user_id === user_id);
      if (User) {
        User[type] = User[type].filter(
          (user) => user.movie_id !== movie.movie_id
        );
      }
      state.isLoginUser = User;
    },
    AddNewSearchList(state, action) {
      // 새로운 검색어 추가
      const { user_id } = action.payload;
      const User = state.LoginUser.find((user) => user.user_id === user_id);

      // 아래 객체에 코드 작성
      const NewSearch = { search_id: Math.floor(Math.random() * 1000000) };

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
      const { user_id, channel_id } = action.payload;
      const User = state.LoginUser.find((user) => user.user_id === user_id);
      if (User) {
        if (!User.Subscription_Id.includes(channel_id)) {
          User.Subscription_Id.push(channel_id);
        }
        state.isLoginUser = User;
      } // 1106 김신영 수정
    },
    DelSubscription(state, action) {
      // 구독 목록 삭제
      const { user_id, channel_id } = action.payload;
      const User = state.LoginUser.find((user) => user.user_id === user_id);
      User.Subscription_Id = User.Subscription_Id.filter(
        (Subscription) => Subscription !== channel_id
      );
      state.isLoginUser = User;
    },
  },
});

export const {
  UserLogin,
  UserLogout,
  AddNewUser,
  IsAddList,
  IsDelList,
  AddNewSearchList,
  DelSearchList,
  AddNewSubscription,
  DelSubscription,
} = authSlice.actions;
export default authSlice.reducer;
