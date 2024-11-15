import { useEffect, useState } from 'react';

const SearchHistory = ({ Search, isShown }) => {
    const [isSearched, setIsSearched] = useState([]); // 검색 기록
    useEffect(() => {
        if (Search) {
            setIsSearched((listedSearch) => {
                // 중복 검색어가 있을 경우 추가하지 않음
                if (listedSearch.includes(Search)) return listedSearch;
                return [...listedSearch, Search];
            });
        }
    }, [Search]);

    const handleDelete = (keyword) => {
        // 검색 기록 삭제
        setIsSearched((listedSearch) => listedSearch.filter((item) => item !== keyword));
    };

    return (
        isSearched.length > 0 && // 검색어 모두 삭제 시 출력 안 되게
        !isShown && ( // 검색창 클릭 시 출력
            <ul className='search-history'>
                {isSearched.map((keyword, index) => (
                    <li key={index} className='search-item'>
                        <p className='search-keyword'>
                            <img
                                src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg'
                                alt='search'
                            />
                            {keyword}
                        </p>
                        <button className='history-btn' onClick={() => handleDelete(keyword)}>
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
