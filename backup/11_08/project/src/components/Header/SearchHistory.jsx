import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchHistory = ({ Search, isShown, setSearch }) => {
    const navigate = useNavigate();
    const [isSearched, setIsSearched] = useState([]); // 검색한 단어
    useEffect(() => {
        if (Search) {
            setIsSearched((listedSearch) => {
                // 중복 검색어 추가 X
                if (listedSearch.includes(Search)) return listedSearch;
                return [Search, ...listedSearch];
            });
        }
    }, [Search]);

    // 최근 기록 재검색
    const searchKeyword = (keyword) => {
        setSearch(keyword);
        // navigate(`/movies/${keyword}`); // 질문 1
    };

    // 검색 기록 삭제
    const DeleteKeyword = (keyword) => {
        setIsSearched((listedSearch) => listedSearch.filter((item) => item !== keyword));
    };

    return (
        isSearched.length > 0 && // 검색어 모두 삭제 시 창 출력 X
        !isShown && ( // 검색창 클릭 시 출력
            <ul className="search-history">
                {isSearched.map((keyword, index) => (
                    <li key={index} className="search-item" onClick={() => searchKeyword(keyword)}>
                        <p className="search-keyword">
                            <img
                                src="https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg"
                                alt="search"
                            />
                            {keyword}
                        </p>
                        <button
                            className="history-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                DeleteKeyword(keyword, e); // 기록 삭제
                            }}
                        >
                            <img
                                src="https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Close_Btn.svg"
                                alt="close-btn"
                                className="close-btn"
                            />
                        </button>
                    </li>
                ))}
            </ul>
        )
    );
};

export default SearchHistory;
