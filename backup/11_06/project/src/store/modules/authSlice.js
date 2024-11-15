import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../../assets/api/LoginUser";

const initialState = {
  LoginUser,
  // 현재 로그인 된 유저
  isLoginUser: {
    user_id: 904206,
    user_name: "무찌",
    user_age: 35,
    user_tel: "010-0654-7051",
    user_email: "moozzi@naver.com",
    user_password: "1111",
    user_search_list: [{ search_id: 1, search: "song" }],
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
    Download_List: [
      {
        movie_id: 5961259,
        movie_title:
          "피할 수 없는 운명.. 귀신(鬼神) 보는 남자👻 (소름주의) [무엇이든 물어보살]",
        movie_body:
          "그의 눈앞에 시도 때도 없이 나타난다는 귀신들!독실한 크리스천이지만 신묘한 능력 덕분에 모르는 사람들까지 점 봐달라고 찾아온다는데..",
        movie_image:
          "https://i.ytimg.com/vi/j-rZqBXHIic/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc5a2AFFlDSZ1NnUBbw6obVrfkKw",
        movie_video:
          "https://www.youtube.com/embed/j-rZqBXHIic?si=m8lX6Aec3_QXyyZh&autoplay=1&mute=1",
        // 동영상 좋아요 수
        movie_like_count: 91000,
        movie_category: "talk",
        movie_channel: "KBS_Joy",
        movie_channel_id: 741852,
        movie_date: {
          year: 2019,
          month: 11,
          day: 18,
        },
        movie_comments: [
          {
            comment_id: 943854943,
            comment_body:
              "공부안하고 딴짓할때 수호령이 뒤통수 때려줬음 좋겠다..",
            comment_user_id: "test",
            comment_user_name: "ino-zk3go",
          },
        ],
      },
    ],
    // 구독한 채널 아이디
    Subscription_Id: [806540, 798311],
  },
  isAuth: true,
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
    AddNewUser(state, action) {
      // 새로운 유저 회원가입 조건문 처리 해야함
      // 로그인, 로그아웃 등 기능은 별도로 구현 해야함
      const NewUser = { user_id: Math.floor(Math.random() * 1000000) };
      state.LoginUser.push(NewUser);
      state.isLoginUser = NewUser;
      state.isAuth = true;
    },
    IsAddList(state, action) {
      // 시청기록 , 재생목록, 나중에 볼 동영상, 좋아요 표시한 동영상, 오프라인 저장 동영상 을 추가하는 동작
      // action.payload.type 으로 Viewing_Record, Playlist... 등을 받아와서 처리
      const { user_id, type, movie } = action.payload;
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
      const { user_id } = action.payload;
      const User = state.LoginUser.find((user) => user.user_id === user_id);
      User.Subscription_Id.push();
      state.isLoginUser = User;
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
