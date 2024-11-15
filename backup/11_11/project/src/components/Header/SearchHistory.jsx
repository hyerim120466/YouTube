import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DelSearchList } from '../../store/modules/authSlice';

const SearchHistory = ({ isShown, setSearch, setIsShown }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.isLoginUser);
    const searchHistory = user?.user_search_list || []; // 검색어 목록

    // 최근 기록 재검색
    const searchKeyword = (keyword) => {
        setSearch(keyword);
        setIsShown(true);
        navigate(`/movies/${keyword}`); // 질문 1
    };

    // 검색 기록 삭제
    const deleteKeyword = (keyword) => {
        dispatch(DelSearchList({ user_id: user.user_id, search: keyword }));
    };

    return (
        searchHistory.length > 0 && // 검색어 모두 삭제 시 창 출력 X
        !isShown && ( // 검색창 클릭 시 출력
            <ul className='search-history'>
                {searchHistory.map((item) => (
                    <li
                        key={item.search_id}
                        className='search-item'
                        onClick={() => searchKeyword(item.search)}
                    >
                        <p className='search-keyword'>
                            <img
                                src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg'
                                alt='search'
                            />
                            {item.search}
                        </p>
                        <button
                            className='history-btn'
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteKeyword(item.search); // 기록 삭제
                            }}
                        >
                            <img
                                src='https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Close_Btn.svg'
                                alt='close-btn'
                                className='close-btn'
                            />
                        </button>
                    </li>
                ))}
            </ul>
        )
    );
};

export default SearchHistory;
