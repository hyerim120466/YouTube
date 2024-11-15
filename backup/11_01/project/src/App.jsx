import Layout from './common/Layout';
import StudioLayout from './common/StudioLayout';
import CommentPage from './components/Studio/CommentPage';
import ContentPage from './components/Studio/ContentPage';
import DashboardPage from './components/Studio/DashboardPage';
import { Channel, Feed, Join, Login, Search, Studio, Subscription, Watch, YouTube } from './page';
import GlobalStyle from './style/GlobalStyle';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<YouTube />} />
                        <Route path='/movies'>
                            <Route path=':Search' element={<Search />} />
                        </Route>
                        <Route path='/watch'>
                            <Route path=':Movie_ID' element={<Watch />} />
                        </Route>
                        <Route path='/channel'>
                            <Route path=':Channel_name' element={<Channel />} />
                        </Route>
                        <Route path='/feed'>
                            <Route path=':Category' element={<Feed />} />
                        </Route>

                        <Route path='/subscription'>
                            <Route index element={<Subscription />} />
                        </Route>
                    </Route>
                    <Route path='/login'>
                        <Route index element={<Login />} />
                    </Route>
                    <Route path='/join'>
                        <Route index element={<Join />} />
                    </Route>
                    <Route path='/studio' element={<StudioLayout />}>
                        <Route path=':User_ID/dashboard' element={<Studio />} />
                        <Route path=':User_ID/content' element={<ContentPage />} />
                        <Route path=':User_ID/comment' element={<CommentPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
