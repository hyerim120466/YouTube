import { createSlice } from '@reduxjs/toolkit';
import { LoginUser } from '../../assets/api/LoginUser';

const initialState = {
    LoginUser: JSON.parse(localStorage.getItem('YoutubeLoginUser')) || LoginUser,
    isLoginUser: JSON.parse(localStorage.getItem('YoutubeIsLoginUser')) || {},
    isAuth: JSON.parse(localStorage.getItem('YoutubeIsAuth')) || false,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        UserLogin(state, action) {
            const { user_email, user_password } = action.payload;
            const thisUser = state.LoginUser.find(
                (user) => user.user_email === user_email && user.user_password === user_password
            );
            if (thisUser) {
                state.isAuth = true;
                state.isLoginUser = thisUser;
                localStorage.setItem('YoutubeIsAuth', JSON.stringify(true));
                localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(thisUser));
            } else {
                state.isAuth = false;
                state.isLoginUser = {};
                localStorage.removeItem('YoutubeIsAuth');
                localStorage.removeItem('YoutubeIsLoginUser');
            }
        },

        UserLogout(state) {
            state.isAuth = false;
            state.isLoginUser = null;
            localStorage.removeItem('YoutubeIsAuth');
            localStorage.removeItem('YoutubeIsLoginUser');
        },

        AddNewUser(state, action) {
            if (action.payload.ip) {
                const thisUser = state.LoginUser.find((user) => user.user_id === action.payload.ip);
                if (thisUser) {
                    state.isLoginUser = thisUser;
                } else {
                    const NewUser = {
                        user_id: action.payload.ip,
                        user_search_list: [],
                        Viewing_Record: [],
                    };
                    state.LoginUser.push(NewUser);
                    state.isLoginUser = NewUser;
                }
            } else {
                const NewUser = {
                    user_id: Math.floor(Math.random() * 1000000),
                    ...action.payload,
                    user_search_list: [],
                    Viewing_Record: [],
                    Playlist: [],
                    Later_Watch: [],
                    like_Movie_List: [],
                    dislike_Movie_List: [],
                    Download_List: [],
                    Subscription_Id: [],
                };
                state.LoginUser.push(NewUser);
                state.isLoginUser = NewUser;
                state.isAuth = true;
            }
            localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
            localStorage.setItem('YoutubeIsAuth', JSON.stringify(state.isAuth));
            localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
        },

        IsAddList(state, action) {
            const { user_id, type, movie } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            if (User && User[type]) {
                const existingIndex = User[type].findIndex(
                    (item) => item.movie_id === movie.movie_id
                );
                if (existingIndex !== -1) {
                    User[type].splice(existingIndex, 1);
                }
                User[type].push(movie);
                User[type].sort(
                    (a, b) =>
                        new Date(b.movie_date.year, b.movie_date.month - 1, b.movie_date.day) -
                        new Date(a.movie_date.year, a.movie_date.month - 1, a.movie_date.day)
                );
                state.isLoginUser = User;
            }
            localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
            localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
        },

        IsDelList(state, action) {
            const { user_id, type, movie } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            if (User) {
                User[type] = User[type].filter((user) => user.movie_id !== movie.movie_id);
            }
            state.isLoginUser = User;
            localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
            localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
        },
        AllDelList(state, action) {
            const { user_id, type } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            if (User) {
                User[type] = [];
            }
            state.isLoginUser = User;
            localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
            localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
        },

        AddNewSearchList(state, action) {
            const { user_id, search } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            if (User) {
                const isDuplicate = User.user_search_list.some((item) => item.search === search);
                if (!isDuplicate) {
                    const NewSearch = {
                        search_id: Math.floor(Math.random() * 1000000),
                        search,
                    };
                    User.user_search_list.unshift(NewSearch);
                    state.isLoginUser = User;
                    localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
                    localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
                }
            }
        },

        DelSearchList(state, action) {
            const { user_id, search } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            if (User) {
                User.user_search_list = User.user_search_list.filter(
                    (item) => item.search !== search
                );
                state.isLoginUser = User;
                localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
                localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
            }
        },

        AddNewSubscription(state, action) {
            const { user_id, channel_id } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            if (User) {
                if (!User.Subscription_Id?.includes(channel_id)) {
                    User.Subscription_Id.push(channel_id);
                }
                state.isLoginUser = User;
                localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
                localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
            }
        },

        DelSubscription(state, action) {
            const { user_id, channel_id } = action.payload;
            const User = state.LoginUser.find((user) => user.user_id === user_id);
            User.Subscription_Id = User.Subscription_Id.filter(
                (Subscription) => Subscription !== channel_id
            );
            state.isLoginUser = User;
            localStorage.setItem('YoutubeLoginUser', JSON.stringify(state.LoginUser));
            localStorage.setItem('YoutubeIsLoginUser', JSON.stringify(state.isLoginUser));
        },
    },
});

export const {
    UserLogin,
    UserLogout,
    AddNewUser,
    IsAddList,
    AllDelList,
    IsDelList,
    AddNewSearchList,
    DelSearchList,
    AddNewSubscription,
    DelSubscription,
} = authSlice.actions;
export default authSlice.reducer;
