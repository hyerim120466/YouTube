const SearchHistory = () => {
    return (
        <ul className='search-history'>
            <li className='search-item'>
                <p className='search-keyword'>
                    <img
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg'
                        alt='search'
                    />
                    Search
                </p>
                <button className='history-btn'>X</button>
            </li>
        </ul>
    );
};

export default SearchHistory;
