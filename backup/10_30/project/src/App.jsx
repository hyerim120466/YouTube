import Layout from './common/Layout';
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
                            <Route path=':Channel_ID' element={<Channel />} />
                        </Route>
                        <Route path='/feed'>
                            <Route path=':Category' element={<Feed />} />
                        </Route>
                        <Route path='/studio'>
                            <Route path=':User_ID' element={<Studio />} />
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
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
